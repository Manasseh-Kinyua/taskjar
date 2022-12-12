import { HashRouter, Routes, Route } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from './screens/HomeScreen';
import ProjectScreen from './screens/ProjectScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProjectEditScreen from './screens/ProjectEditScreen';
import TaskBoardScreen from './screens/TaskBoardScreen';
import TaskListScreen from './screens/TaskListScreen';
import CreateTaskScreen from './screens/CreateTaskScreen';
import TaskScreen from './screens/TaskScreen';
import TaskEditScreen from './screens/TaskEditScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <div>
      <HashRouter>
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
            <Route path='/project/:id/tasks/create' element={ <CreateTaskScreen /> } />
            <Route path='/task/:id' element={ <TaskScreen /> } />
            <Route path='/task/:id/edit' element={ <TaskEditScreen /> } />
            <Route path='/admin/userlist' element={ <UserListScreen /> } />
            <Route path='/user/edit/:id' element={ <UserEditScreen /> } />
            <Route path='/profile' element={ <ProfileScreen /> } />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
