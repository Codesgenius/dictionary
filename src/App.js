import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Landing from './pages/Landing';
import { WordProvider } from './contexts/WordContext';
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <WordProvider>
          <Landing />
        </WordProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
