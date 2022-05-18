import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Main from './components/Main/Main';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient} className="App">
      <Header />
      <Main />
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
