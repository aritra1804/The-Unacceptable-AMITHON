import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import {isMobile} from 'react-device-detect';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import FileSaver from 'file-saver';

function App() {
  const savefile = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/resources/app-release.apk",
      "StarxApp.apk"
    )
  }
  if (isMobile) {
    return <div style={{display:"flex", flexDirection:"column", alignItems:"center",textAlign:"center", marginTop:"20%", marginLeft:"3%"}}> This website is not available for mobile and ipad. <br/> It will be available in the form of app. <br/> Kindly check it in desktop. <button className='bg-[#6F5DE0] text-white py-3 px-8' onClick={savefile}>Download App</button> <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json"  background="transparent"  speed="1"  style={{width:"500px", marginTop:"5%"}}  loop  autoplay></lottie-player></div>
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
