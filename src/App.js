import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [show,setShow] = useState(true)
  return (
    <div className="App">
      <div style={{width:"25%",height:"100%"}}>
      <Sidebar show={show}/>

      </div>
      <div style={{width:"75%"}}>

      <Main setShow={setShow} show={show}/>
      </div>
    </div>
  );
}

export default App;
