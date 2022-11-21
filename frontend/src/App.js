import { BrowserRouter, Routes, Route } from 'react-bootstrap-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className='py-3 main-bg'>
          <Routes>
            <Route path='/' element={ <HomeScreen /> } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
