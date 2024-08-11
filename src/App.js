import ThemeProvider from './ThemeProvider/ThemeProvider';
import './App.css';
import UserDetail from './Components/UserDetail';
import UserList from './Components/UserList';
 import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div >
     <ThemeProvider>
      <Routes>
        <Route path='/' element={ <UserList/>} />
        <Route path='/details/:id' element={ <UserDetail/>}/>
      </Routes>
     
    
     </ThemeProvider>
    </div>
  );
}

export default App;
