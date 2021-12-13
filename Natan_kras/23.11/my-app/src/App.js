import './App.css';
import Login from './components/Login';
import Login_with_validation from './components/Login_with_validation';
import GetPosts from './components/GetPosts';
import GetFromJPH from './components/GetFromJPH';
import GetFromJPHWithForm from './components/GetFromJPHWithForm';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Login_with_validation/> */}
     {/* <GetPosts setCounter={setCounter}/> */}
      <GetFromJPH/>
      {/* <GetFromJPHWithForm/> */}
    </div>
  );
}

export default App;
