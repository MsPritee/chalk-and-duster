
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from './Components/Banner';
import Container1 from './Components/Container1';
import Container2 from './Components/Container2';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Aboutus from './Components/Aboutus';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Container1 />
      <Container2 />
      <Footer />

      {/* <BrowserRouter>
        <Routes>
          <Route path='/aboutus' element={Aboutus} />
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}

export default App;
