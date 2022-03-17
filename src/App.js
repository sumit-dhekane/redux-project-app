import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Albums from './component/albumsComponent';
import Photos from './component/photosComponent';
import Posts from './component/postsComponent';
import Todos from './component/todosComponent';
import Users from './component/usersComponent';
import Comments from './component/commentsComponent';
import React from 'react';
import Navbar from './component/navBar';

function App() {


  return (
    <React.Fragment>
      
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Albums/>}/>
      <Route path='comments' element={<Comments/>}/>
      <Route path='photos' element={<Photos/>}/>
      <Route path='posts' element={<Posts/>}/>
      <Route path='todos' element={<Todos/>}/>
      <Route path='users' element={<Users/>}/>
     </Routes>
    </BrowserRouter>
  </React.Fragment>
  )
}

export default App;
