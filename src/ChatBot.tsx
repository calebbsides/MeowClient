import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import ChatLog from './ChatLog';
import { useMessages } from './useMessages';

type ChatBotProps = { onClose: () => void };

export default function ChatBot({ onClose }: ChatBotProps) {
  const { messages, postMessage, isLoading } = useMessages();
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    postMessage(input);
    setInput('');
  };

  return (
    <Dialog onClose={onClose} open maxWidth="sm" fullWidth>
      <DialogTitle>
        {' '}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box height="60vh">
          <ChatLog messages={messages} isLoading={isLoading} />
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              display: 'contents',
            }}
          >
            <TextField
              fullWidth
              placeholder="What would you like to post?"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton color="primary" onClick={handleSend} disabled={!input.trim()}>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
