import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Display from './components/display';
import Buttonboot from './components/button';

function App() {
  return (
    <div className="App">
      <Display content='Counter'/>
      <Display content='0'/>
      <Buttonboot content='Increment'/>
      <Buttonboot content='Decrement'/>
      <Buttonboot content='Reset'/>
    </div>
  );
}

export default App;
