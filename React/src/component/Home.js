import {Routes,Route} from 'react-router-dom';
import Login from './Login';
function Home() {
  return (
    <Routes>
        <Route path='/login' element={<Login/>} />
    </Routes>


  );
}

export default Home;