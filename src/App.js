import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar  from './components/Navbar';
import  Shop  from './components/Shop';

export default function App() {

  return (
    <div>
      < Navbar />
      < Shop/>
    </div>
  );

}
