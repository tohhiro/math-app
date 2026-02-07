import './App.css';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { HeaderColorProvider } from 'src/context/useHeaderColorContext';

function App() {
  return (
    <HeaderColorProvider>
      <Header />
      <Main />
    </HeaderColorProvider>
  );
}

export default App;
