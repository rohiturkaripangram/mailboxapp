
import './App.css';
import {Routes,Route} from "react-router-dom"

import {Inbox} from "./Pages/Inbox/Inbox"
import {Aside} from "./Component/aside"
import {Trash} from "./Pages/Trash/Trash"
import {Spam} from "./Pages/Spam/Spam"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Aside/>
      <Routes>
    
       <Route path="/" element={<Inbox/>}/>
       <Route path="/spam" element={<Spam/>} />
       <Route path="/Trash" element={<Trash/>}/>
      </Routes>
      
      </div>
      
    </div>
  );
}

export default App;
