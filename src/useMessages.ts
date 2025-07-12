import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { usePosts } from './PostContext';

export type Message = { text: string; role: 'user' | 'model' };

export function useMessages() {
    const [messages, setMessages] = useState<Message[]>([{ text: 'What would you like to post?', role: 'model' }]);
    const { initPosts } = usePosts();

    const { mutate, status } = useMutation({
        mutationFn: async (message: string) => {
            const newMessages: Message[] = [...messages, { text: message, role: 'user' }];
            setMessages(newMessages);

            const request = { message }
            const apiUrl = import.meta.env.VITE_API_URL;
            const res = await fetch(`${apiUrl}/post-content`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(request),
            });

            return res.json();
        },
        onSuccess: (response: any) => {
            console.log(response)
            initPosts(response);
        },
        onError: () => {
            // hande error silently for now
        }
    });

    const postMessage = (message: string) => {
        mutate(message);
    }

    return { messages, postMessage, isLoading: status === 'pending' };
}
