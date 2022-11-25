import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import TaskListScreen from './screens/TaskListScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main className='py-3 main-bg'>
          <Routes>
            <Route path='/' element={ <HomeScreen /> } />
            <Route path='/project/:id' element={ <ProjectScreen /> } />
            <Route path='/project/:id/tasks' element={ <TaskListScreen /> } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;