import {Routes,Route} from 'react-router-dom';
import Login from './component/Login';
import Registor from './component/Registor';
function Home() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/registor" element={<Registor/>}/>
    </Routes>


  );
}

export default Home;