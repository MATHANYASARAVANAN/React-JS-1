import logo from './logo.svg';
import './App.css';
// import { About } from './components/about/about'
import 'bootstrap/dist/css/bootstrap.css'
// import { Notifications } from './components/notification/notifications';
// import { Logicaldesign } from './components/logicaldesign/logicaldesign';
 import { Technologycard } from './components/technologycard/technologycard';
// import { Card } from './components/card/card'
// import './components/card/card.css'
// import { Superover } from './components/superoverlaungage/superoverlaungage';
// import { Socialbutton } from './components/socialbuttons/socialbuttons';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Menu } from './components/menu/menu';

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/About' element={[<Menu />, <About />]}></Route>
          <Route path='/Card' element={[<Menu />, <Card />]}> </Route>
          <Route path='/Logicaldesign' element={[<Menu />, <Logicaldesign />]}> </Route>
          <Route path='/Notifications' element={[<Menu />, <Notifications />]}> </Route>
          <Route path='/Socialbutton' element={[<Menu />, <Socialbutton />]}> </Route>
          <Route path='/Superover' element={[<Menu/>,<Superover/>]}></Route>
        </Routes>
      </BrowserRouter> */}
      <Technologycard/>

    </>

  );
}

export default App;
