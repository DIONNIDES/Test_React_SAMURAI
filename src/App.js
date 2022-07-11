import  './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const App = (props) => {
  return (
    <div className='App_wrapper'>
      <Header />
      <Navbar />
      <div className='main_content'>
        This is a main_content
      </div>
      <Footer />
    </div>
  );
};

export default App;
