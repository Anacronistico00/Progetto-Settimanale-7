import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import EpiNavbar from '../src/Components/EpiNavbar';
import MainComponent from './Components/MainComponent';
// import EpiProfile from './Components/EpiProfile';
// import EpiSettings from './Components/EpiSettings';
import EpiFooter from './Components/EpiFooter';

function App() {
  return (
    <>
      <EpiNavbar />
      <MainComponent />
      {/* <EpiProfile /> */}
      {/* <EpiSettings /> */}
      <EpiFooter />
    </>
  );
}

export default App;
