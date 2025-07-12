import { ListItemText } from '@mui/material';
import type { Message } from './useMessages';

type ChatBubbleProps = {
    message: Message;
}

const ChatBubble = ({ message }: ChatBubbleProps) => {
    return (
        <ListItemText
            primary={message.text}
            sx={{
                bgcolor: message.role === 'user' ? '#1976d2' : '#e0e0e0',
                color: message.role === 'user' ? '#fff' : '#333',
                px: 2,
                py: 1,
                borderRadius: 2,
                maxWidth: '75%',
                textAlign: message.role === 'user' ? 'right' : 'left',
            }}
        />
    )
}

export default ChatBubble