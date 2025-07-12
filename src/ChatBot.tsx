import SendIcon from '@mui/icons-material/Send';
import { Box, Container, IconButton, InputAdornment, Paper, TextField } from '@mui/material';
import { useState } from 'react';
import ChatLog from './ChatLog';
import { useMessages } from './useMessages';

export default function ChatBot() {
    const { messages, postMessage, isLoading } = useMessages();
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        postMessage(input);
        setInput('');
    };

    return (
        <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Paper elevation={6} sx={{ p: 2, height: 600, display: 'flex', flexDirection: 'column', bgcolor: '#f5f7fa' }}>
                <ChatLog messages={messages} isLoading={isLoading} />
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            handleSend();
                        }}
                        style={{
                            display: 'contents'
                        }}>
                        <TextField
                            fullWidth
                            placeholder="What would you like to post?"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton color="primary" onClick={handleSend} disabled={!input.trim()}>
                                                <SendIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }
                            }}
                        />
                    </form>
                </Box>
            </Paper>
        </Container>
    );
}
