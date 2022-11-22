
import './App.css';
import BookNow from './components/BookNow/BookNow';
import ConnectWithUs from './components/ConnectWithUs/ConnectWithUs';
import Footer from './components/Footer/Footer';
import Accordian from './components/FrequentlyAsked/Accordian/Accordian';
import FrequentlyAsked from './components/FrequentlyAsked/FrequentlyAsked';
import Header from './components/Header/Header';
import Himage from './components/Himage/Himage';
import Split from './components/Split/Split';
import WebServices from './components/WebServices/WebServices';

function App() {
  return (
    <div className="App">
      <Header />
      <Himage />
      <BookNow />
      <Split />
     <WebServices />
     <FrequentlyAsked />
     
      <ConnectWithUs />
      <Footer />
    </div>
  );
}

export default App;
