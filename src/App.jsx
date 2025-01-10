import 'bootstrap/dist/css/bootstrap.min.css';
import EpiNavbar from '../src/Components/EpiNavbar';
import './css/reset.css';
import EpiFooter from './Components/EpiFooter';
import MainContent from './Components/MainContent';

function App() {
  return (
    <>
      <EpiNavbar />
      <MainContent />
      <EpiFooter />
    </>
  );
}

export default App;
