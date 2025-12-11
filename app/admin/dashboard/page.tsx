"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Contact {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    type?: 'callback' | 'contact';
    status?: 'Pending' | 'Completed';
    comments?: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const response = await fetch("/api/admin/contacts");

            if (response.status === 401) {
                router.push("/admin");
                return;
            }

            const data = await response.json();

            if (response.ok) {
                setContacts(data.contacts);
            } else {
                setError(data.error || "Failed to fetch contacts");
            }
        } catch (err) {
            setError("An error occurred while fetching contacts");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            await fetch("/api/admin/logout", { method: "POST" });
            router.push("/admin");
        } catch (err) {
            console.error("Logout error:", err);
        }
    };

    const updateContact = async (id: string, updates: { status?: 'Pending' | 'Completed'; comments?: string }) => {
        try {
            const response = await fetch("/api/admin/contacts", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, ...updates }),
            });

            if (response.ok) {
                // Update local state
                setContacts(contacts.map(c =>
                    c.id === id ? { ...c, ...updates } : c
                ));
            }
        } catch (err) {
            console.error("Update error:", err);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    // Filter contacts by type and status
    const allCallbackRequests = contacts.filter(c => c.type === 'callback' || c.message === "Requesting a Call Back");
    const allCustomerMessages = contacts.filter(c => c.type !== 'callback' && c.message !== "Requesting a Call Back");

    const callbackRequests = allCallbackRequests.filter(c =>
        activeTab === 'pending' ? c.status !== 'Completed' : c.status === 'Completed'
    );
    const customerMessages = allCustomerMessages.filter(c =>
        activeTab === 'pending' ? c.status !== 'Completed' : c.status === 'Completed'
    );

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-light">
                <div className="text-xl font-semibold">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-brand-light p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-brand-dark">Admin Dashboard</h1>
                    <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
                    >
                        Logout
                    </Button>
                </div>

                {error && (
                    <div className="mb-6 text-sm text-red-600 bg-red-50 p-4 rounded">
                        {error}
                    </div>
                )}

                {/* Tab Switcher */}
                <div className="flex gap-2 border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('pending')}
                        className={`px-6 py-3 font-semibold transition-all ${activeTab === 'pending'
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Pending ({allCallbackRequests.filter(c => c.status !== 'Completed').length + allCustomerMessages.filter(c => c.status !== 'Completed').length})
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`px-6 py-3 font-semibold transition-all ${activeTab === 'completed'
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        Completed ({allCallbackRequests.filter(c => c.status === 'Completed').length + allCustomerMessages.filter(c => c.status === 'Completed').length})
                    </button>
                </div>

                {/* Callback Requests Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Callback Requests ({callbackRequests.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {callbackRequests.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                No callback requests yet.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left p-4 font-semibold">Date</th>
                                            <th className="text-left p-4 font-semibold">Name</th>
                                            <th className="text-left p-4 font-semibold">Phone</th>
                                            <th className="text-left p-4 font-semibold">Email</th>
                                            <th className="text-left p-4 font-semibold">Status</th>
                                            <th className="text-left p-4 font-semibold">Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {callbackRequests.map((contact) => (
                                            <tr key={contact.id} className="border-b hover:bg-gray-50">
                                                <td className="p-4 text-sm text-muted-foreground">
                                                    {formatDate(contact.createdAt)}
                                                </td>
                                                <td className="p-4 font-medium">{contact.name}</td>
                                                <td className="p-4">{contact.phone}</td>
                                                <td className="p-4">{contact.email}</td>
                                                <td className="p-4">
                                                    <select
                                                        value={contact.status || 'Pending'}
                                                        onChange={(e) => updateContact(contact.id, { status: e.target.value as 'Pending' | 'Completed' })}
                                                        className="px-3 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="Completed">Completed</option>
                                                    </select>
                                                </td>
                                                <td className="p-4">
                                                    <input
                                                        type="text"
                                                        value={contact.comments || ''}
                                                        onChange={(e) => updateContact(contact.id, { comments: e.target.value })}
                                                        placeholder="Add comments..."
                                                        className="w-full px-3 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Customer Messages Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Customer Messages ({customerMessages.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {customerMessages.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground">
                                No customer messages yet.
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left p-4 font-semibold">Date</th>
                                            <th className="text-left p-4 font-semibold">Name</th>
                                            <th className="text-left p-4 font-semibold">Email</th>
                                            <th className="text-left p-4 font-semibold">Phone</th>
                                            <th className="text-left p-4 font-semibold">Message</th>
                                            <th className="text-left p-4 font-semibold">Status</th>
                                            <th className="text-left p-4 font-semibold">Comments</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {customerMessages.map((contact) => (
                                            <tr key={contact.id} className="border-b hover:bg-gray-50">
                                                <td className="p-4 text-sm text-muted-foreground">
                                                    {formatDate(contact.createdAt)}
                                                </td>
                                                <td className="p-4 font-medium">{contact.name}</td>
                                                <td className="p-4">{contact.email}</td>
                                                <td className="p-4">{contact.phone}</td>
                                                <td className="p-4 max-w-md truncate" title={contact.message}>
                                                    {contact.message}
                                                </td>
                                                <td className="p-4">
                                                    <select
                                                        value={contact.status || 'Pending'}
                                                        onChange={(e) => updateContact(contact.id, { status: e.target.value as 'Pending' | 'Completed' })}
                                                        className="px-3 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                                    >
                                                        <option value="Pending">Pending</option>
                                                        <option value="Completed">Completed</option>
                                                    </select>
                                                </td>
                                                <td className="p-4">
                                                    <input
                                                        type="text"
                                                        value={contact.comments || ''}
                                                        onChange={(e) => updateContact(contact.id, { comments: e.target.value })}
                                                        placeholder="Add comments..."
                                                        className="w-full px-3 py-1 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
