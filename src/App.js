import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';

const App = () => {
  return (
    <div>
      <div className='wrapper'>
      <Header/>
      <Section/>
      <Footer/>
      </div>
    </div>
  );
}


export default App;
