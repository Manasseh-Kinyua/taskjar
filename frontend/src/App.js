import {  } from 'react-bootstrap'

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className='py-3 main-bg'>
        <h1>Taskjar</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
