import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>             
        <Header/> 
            <Routes>
              <Route path="/" exact element={<Main/>}/>                  
              <Route path="*" element={<NotFound/>}/>
            </Routes>           
        <Footer/>                  
      </BrowserRouter>
    </div>
  )
}

export default App
