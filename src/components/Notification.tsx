"use client";

import { useEffect, useState } from "react";

export default function QuoteNotifications() {
    const [quotes, setQuotes] = useState<string[]>([]);

    useEffect(() => {
        const socket = new WebSocket("ws://localhost:8080");

        socket.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (msg.type === "new_quote") {
                    setQuotes((prev) => [msg.data, ...prev]);
                }
            } catch (e) {
                console.error("Invalid WS message", e);
            }
        };

        socket.onopen = () => console.log("Connected to WebSocket");
        socket.onclose = () => console.log("Disconnected from WebSocket");

        return () => socket.close();
    }, []);

    return (
        <h2>Notification {quotes.length}</h2>
    )
}