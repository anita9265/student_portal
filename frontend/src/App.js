// import "./App.css";
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import { Route, Router, Routes } from 'react-router-dom';
import Changepassword from './component/Changepassword';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Dashboard from './component/Dashboard';
import Addsubject from './component/Addsubject';
import Layout from './component/Layout';
import Updatesubject from './component/Updatesubject';
import Deletesubject from './component/Deletesubject';
import Viewallsubject from './component/Viewallsubject';
import Resultstu from './component/Resultstu';
import Calander from './component/Calander';
import Attandance from './component/Attandance';
import Manageaccount from './component/Manageaccount';
import Chat from './component/Chat';
import Dashboard2 from './component/Dashboard2';


function App() {
  return (
    <div>
      {/* <Routes>
           <Route path='/' element={ <Home/> }></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/changepassword" element={<Changepassword />} /> */}

              {/* multiple pages */}
        {/* <Route element={<Layout />}>
          <Route path="/dashboard2" element={<Dashboard/>} />
          <Route path="/subject/add" element={<Addsubject />} />
          <Route path="/subject/edit" element={<Updatesubject />} />
          <Route path="/subject/delete" element={<Deletesubject />} />
          <Route path="/subject/view" element={<Viewallsubject />} />
          <Route path="/result" element={<Resultstu />} />
          <Route path="/calendar" element={<Calander />} />
          <Route path="/attendance" element={<Attandance />} />
          <Route path="/manageaccount" element={<Manageaccount />} />
          <Route path="/chat" element={<Chat />} />
        </Route>
      </Routes>
     */}


     <Routes>
          <Route></Route>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepassword" element={<Changepassword />} />

           <Route element={<Layout />}>
          <Route path="/dashboard2" element={<Dashboard/>} />
           <Route path="/subject/add" element={<Addsubject />} />
          <Route path="/subject/edit" element={<Updatesubject />} />
          <Route path="/subject/delete" element={<Deletesubject />} />
          <Route path="/subject/view" element={<Viewallsubject />} />
          <Route path="/result" element={<Resultstu />} />
          <Route path="/calendar" element={<Calander />} />
          <Route path="/attendance" element={<Attandance />} />
          <Route path="/manageaccount" element={<Manageaccount />} />
          <Route path="/chat" element={<Chat />} />
          </Route>

     </Routes>
    </div>
  );
}

export default App;
