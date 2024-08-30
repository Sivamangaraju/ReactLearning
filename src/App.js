import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
   const [mode, setmode] = useState('light');
   const [text, settext] = useState('Enable Dark Mode');
   const [myStyle, setMyStyle] = useState('dark');
   const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      setMyStyle('light');
      settext('Disable Dark Mode');
    }
    else{
      setmode('light');
      setMyStyle('dark')
      settext('Enable Dark Mode')
    }
   }

    

  
  return (
      <>  
      
      <Navbar title="Text Utils"  mode={mode} text={text} myStyle={myStyle} toggleMode={toggleMode}/>
      <TextForm heading="Enter Your Data Below" mode={mode} text={text} myStyle={myStyle} toggleMode={toggleMode}/>
      {<div className='container'>
     <About/>
     </div>} 

      </>
    
     );
}

export default App;
