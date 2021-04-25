import './App.css';
import Header from './components/Header';
import InputFields from './components/InputFields';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h3 className="sign-up">Sign Up</h3>
      <InputFields></InputFields>
      <Footer></Footer>
    </div>
  );
}

export default App;
