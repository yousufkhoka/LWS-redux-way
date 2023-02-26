import React from 'react';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Todolist from './components/Todolist';
import store from './redux/store';

const App = () => {
  return (
  <Provider store={store}>
    <div
    className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
>
    
      <Navbar/>

       <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
     
        <Header/>
        <hr className="mt-4" />        
        <Todolist/>
        <hr className="mt-4" />
        <Footer/>
    </div>
</div>
</Provider>
  );
};

export default App;