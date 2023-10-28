import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Homepage from './Homepage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/SignIn' element={<SignIn/>} />
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
