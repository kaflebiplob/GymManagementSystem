import React from 'react';
import './App.css'
import GymBody from './components/body'
import GymFooter from './components/footer'




function App() {
  
  React.useEffect(() => {
   stickylogo();
}, []);


  return (
    
    <div className='app'>


    <GymBody />
   <GymFooter/>
  
    
    </div>

  
  )
}
import stickylogo from './scripts/stickylogo';

export default App
