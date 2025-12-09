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
    createdAt: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString();
    };

    // Filter contacts
    const callbackRequests = contacts.filter(c => c.type === 'callback' || c.message === "Requesting a Call Back");
    const customerMessages = contacts.filter(c => c.type !== 'callback' && c.message !== "Requesting a Call Back");

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
                                                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending</span>
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
