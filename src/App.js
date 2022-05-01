
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Create from './create';
import BlogDetails from './blog-details';
import PageNotFound from './pageNotFound';

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      
      <div className="content">
        <Routes>   
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/blogs/:id" element={<BlogDetails/>} />
      <Route path="*" element={<PageNotFound/>} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
