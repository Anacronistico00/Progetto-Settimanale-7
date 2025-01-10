import 'bootstrap/dist/css/bootstrap.min.css';
import EpiNavbar from '../src/Components/EpiNavbar';
import './css/reset.css';
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
