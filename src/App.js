import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

const App = () => {
  return (
    <div>
      <div className='wrapper'>
      <Header/>
      <Section/>
      <Comments/>
      <Footer/>
      </div>
    </div>
  );
}


export default App;
