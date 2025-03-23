
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import SignInPage from './components/SignInPage';
import WelcomePage from './components/WelcomePage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WelcomePage/>}></Route>
                <Route path='/register' element={ <RegisterPage/>}></Route>
                <Route path='/signIn' element={ <SignInPage/> }></Route>
                <Route path='/home' element={ <HomePage/>}></Route>

            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
