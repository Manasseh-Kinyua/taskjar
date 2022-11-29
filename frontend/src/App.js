import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProjectEditScreen from './screens/ProjectEditScreen';
import TaskBoardScreen from './screens/TaskBoardScreen';
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
            <Route path='/project/:id/taskboard' element={ <TaskBoardScreen /> } />
            <Route path='/login' element={ <LoginScreen /> } />
            <Route path='/register' element={ <RegisterScreen /> } />
            <Route path='/project/:id/edit' element={ <ProjectEditScreen /> } />
            <Route path='/project/:id/tasks' element={ <TaskListScreen /> } />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
