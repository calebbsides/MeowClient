import { Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ChatBot from './ChatBot';
import { ErrorBoundary } from './ErrorBoundary';
import { useState } from 'react';
import PlatformCardList from './PlatformCardList';
import { PostProvider } from './PostContext';

function App() {
  const [isChatBotOpen, setIsChatBotOpen] = useState<boolean>(false);

  return (
    <>
      <ErrorBoundary>
        <PostProvider>
          <PlatformCardList />
          <Fab
            color="secondary"
            aria-label="edit"
            onClick={() => setIsChatBotOpen(true)}
            style={{
              position: 'fixed',
              bottom: 24,
              left: 24,
              zIndex: 1300,
            }}
          >
            <AddIcon />
          </Fab>
          {isChatBotOpen && <ChatBot onClose={() => setIsChatBotOpen(false)} />}
        </PostProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
