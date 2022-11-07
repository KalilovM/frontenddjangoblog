import React from 'react'
import Profile from './pages/profile/Profile';
import CustomNav from './components/navbar/CustomNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import Posts from "./pages/posts/Posts";


export default function App() {
  return (
    <BrowserRouter>
    <CustomNav/>
        <Routes>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/' element={<Posts/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  )
}
