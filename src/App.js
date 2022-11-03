import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/NotFound';
import Navbar from './Components/layout/Navbar';
import Footer from './Components/layout/Footer';
import {GithubProvider} from './context/github/GithubContext'

function App() {
  return (
    <GithubProvider>
    <Router>
     <div className="flex flex-col justify-between">
     <Navbar />

     <main className='container mx-auto px-3 pb-12'>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/notfound' element={<NotFound />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
     </main>
     </div>
     <Footer />
     </Router>
     </GithubProvider>
  );
}

export default App;
