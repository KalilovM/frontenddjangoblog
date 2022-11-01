import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomNav from './components/navbar/CustomNav';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/profile/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <CustomNav/>
    <Profile/>
    </>
);