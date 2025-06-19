import {Routes,Route} from 'react-router-dom';
import Login from './component/Login';
function Home() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
    </Routes>


  );
}

export default Home;