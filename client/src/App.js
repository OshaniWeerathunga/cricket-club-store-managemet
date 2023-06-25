
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/Navbar'
import Home from './component/Home'
import AddItems from './component/AddItems';
import View from './component/View';
import Edit from './component/Edit';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import CommonPage from './component/CommonPage';


function App() {
  /*
  return (
    <>
    
      <Navbar/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/addnew' Component={AddItems}/>
        <Route exact path='/edit/:id' Component={Edit}/>
        <Route exact path='/view/:id' Component={View}/>
      </Routes>
      
    </>
  );
  */

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/' element={<Dashboard/>}>
        <Route path='' element={<CommonPage/>}></Route>
        <Route path='/items' element={<Home/>}></Route>
        <Route exact path='/addnew' Component={AddItems}/>
        <Route exact path='/edit/:id' Component={Edit}/>
        <Route exact path='/view/:id' Component={View}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )

}

export default App;
