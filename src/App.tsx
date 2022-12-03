import {
  Routes,
  Route,
} from 'react-router-dom';
import '@/assets/app.css';
import { Hangman } from "@/page/hangman/hangman";
import Navigation from '@/component/Navigation/navigation';
function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Hangman />} />
        <Route path="hangman" element={<Hangman />} />
        <Route path="*" element={<span>There's nothing here: 404!</span>} />
      </Routes>
    </>
  );
}

export default App;