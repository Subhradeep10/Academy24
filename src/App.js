
import './App.css';
import Banner from './Components/Banner/banner';
import { sliderData } from './Components/Banner/sliderdata';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <Banner slide={sliderData} />
    </>
  );
}

export default App;
