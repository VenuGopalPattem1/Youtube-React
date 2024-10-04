
import { Router } from 'react-router-dom';
import Body from './components/Body';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import VideoPlayer from './components/VideoPlayer';
import Header from './components/Header';
import SideNavBar from './components/SideNavBar';
import Content from './components/Content';
import Main from './components/Main';
import SearchedContent from './components/SearchedContent';

function App() {
  return (
    <><BrowserRouter>
     {/* <div className=' container-fluid'>
            <Header />
      <div className=' mt-3 row'>
      <SideNavBar/>
      <Content />
      </div>
    </div> */}
    <div className=' container-fluid'>
      <Header />
      {/* <SideNavBar /> */}
      {/* <Content/> */}
      </div>
      <Routes>
        <Route path='/' element={<Body />}></Route>
        <Route path='/watch/:id' element={<Main />} />
        <Route  path='/data/:name' element={<SearchedContent />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
