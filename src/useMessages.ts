import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

export type Message = { text: string; role: 'user' | 'model' };

export function useMessages() {
    const [messages, setMessages] = useState<Message[]>([{ text: 'Hello! How can I assist you today?', role: 'model' }]);

    const { mutate, status } = useMutation({
        mutationFn: async (message: string) => {
            const newMessages: Message[] = [...messages, { text: message, role: 'user' }];
            setMessages(newMessages);

            const request = {
                chat_history: newMessages,
            }

            const apiUrl = import.meta.env.VITE_API_URL;
            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request),
            });

            return res.json();
        },
        onSuccess: (message: Message) => {
            if (message) {
                setMessages(prev => [...prev, message]);
            }
        },
        onError: () => {
            setMessages(prev => [...prev, { text: 'Sorry, there was an error contacting the assistant.', role: 'model' }]);
        }
    });

    const postMessage = (message: string) => {
        mutate(message);
    }

    return { messages, postMessage, isLoading: status === 'pending' };
}
