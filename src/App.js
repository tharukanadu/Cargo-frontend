import './App.css';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import News from './Components/News/News';
import Service from './Components/Service/Service';
import Welcome from './Components/WelcomePage/Welcome';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Header/>
     <Welcome/>

     
     <Service/>
     <News/>
     <Blog/>
     <Footer/>
   
    </div>
  );
}

export default App;
