import './App.scss';
import firebase from './firebase-configs.js';

function App() {
  console.log(firebase.database().ref());
  return (
    <div className="App">
      <header className="App-header">
        bepis
      </header>
    </div>
  );
}

export default App;
