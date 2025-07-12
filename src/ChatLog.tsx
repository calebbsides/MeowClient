import { List, ListItem } from '@mui/material';
import ChatBubble from './ChatBubble';
import { type Message } from './useMessages';
import LoadingBubble from './LoadingBubble';

type ChatLogProps = {
    messages: Message[];
    isLoading: boolean;
}

const ChatLog = ({ messages, isLoading }: ChatLogProps) => {
    return (
        <List sx={{ flex: 1, overflowY: 'auto', mb: 2, bgcolor: 'transparent' }}>
            {messages.map((message: Message, idx: number) => (
                <ListItem key={idx} sx={{ justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start' }}>
                    <ChatBubble message={message} />
                </ListItem>
            ))}
            {isLoading && (
                <ListItem>
                    <LoadingBubble />
                </ListItem>
            )}
        </List>
    )
}

export default ChatLog