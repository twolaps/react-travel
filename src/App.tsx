import styles from './App.module.css';
import { Homepage } from './pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
