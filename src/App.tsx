

import ChatBot from './ChatBot';
import { ErrorBoundary } from './ErrorBoundary';
import { Helmet } from 'react-helmet-async';


function App() {
  return (
    <>
      <Helmet>
        <title>MeowClient - Modern Chat App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A modern, production-ready React chat application." />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f5f5f5" />
      </Helmet>
      <ErrorBoundary>
        <ChatBot />
      </ErrorBoundary>
    </>
  );
}

export default App;
