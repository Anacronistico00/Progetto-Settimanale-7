import 'bootstrap/dist/css/bootstrap.min.css';
import EpiNavbar from '../src/Components/EpiNavbar';
import './css/style.css';
import EpiFooter from './Components/EpiFooter';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <>
      <EpiNavbar />
      <MainComponent />
      <EpiFooter />
    </>
  );
}

export default App;
