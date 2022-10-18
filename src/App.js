import { Slider } from '@mui/material';
import PersistentDrawerLeft from './components/SideBar';
import logo from './logo.svg';
import {Router,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft/>
    </div>
  );
}

export default App;
