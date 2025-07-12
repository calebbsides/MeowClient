import ChatBot from './ChatBot';
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <ChatBot />
      </ErrorBoundary>
    </>
  );
}

export default App;
