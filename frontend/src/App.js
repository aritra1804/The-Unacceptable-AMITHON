import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import {isMobile} from 'react-device-detect';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';

function App() {
  if (isMobile) {
    return <div style={{display:"flex", flexDirection:"column", alignItems:"center",textAlign:"center", marginTop:"20%", marginLeft:"3%"}}> This website is not available for mobile and ipad. <br/> It will be available in the form of app. <br/> Kindly check it in desktop. Soon App will be released <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json"  background="transparent"  speed="1"  style={{width:"500px", marginTop:"5%"}}  loop  autoplay></lottie-player></div>
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
