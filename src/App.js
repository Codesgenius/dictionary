import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Landing from './pages/Landing';
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Landing />
      </QueryClientProvider>
    </div>
  );
}

export default App;
