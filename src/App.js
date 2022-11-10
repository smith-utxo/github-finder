import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/NotFound';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import Alert from './Components/layout/Alert';
import User from './pages/User';
import {AlertProvider} from './context/alert/AlertContext'
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
    <AlertProvider>
    <Router>
     <div className="flex flex-col justify-between">
     <Navbar />
      
     <main className='container mx-auto px-3 pb-12'>
     <Alert />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/github-finder' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/user/:login' element={<User />}></Route>
        <Route path='/notfound' element={<NotFound />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
     </main>
     </div>
     <Footer />
     </Router>
     </AlertProvider>
     </GithubProvider>
  );
}

export default App;
