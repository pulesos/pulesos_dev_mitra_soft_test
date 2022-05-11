import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import AboutMe from './components/AboutMe/AboutMe'
import PhotosContainer from './components/PhotosPage/PhotosContainer';
import FullImageContainer from './components/FullImage/FullImageContainer'


function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={
              <PhotosContainer/>}/>
            <Route path='photo/:id'element={<FullImageContainer/>}/>
            <Route path='/me' element={<AboutMe/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
