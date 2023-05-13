
import './App.css';
import NameForm from './components/NameForm';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <div className='app'>
      <NavBar/>
      <div className='container'>
        <div className='row '>
          <div className='col-md-6'>
              <div className='text-white left-container'>
                <p>THE ROYAL ESSENCE OF JOURNEY </p>
                <h1>RELAXED JOURNEY EVER</h1>
              </div>
          </div>
          <div className='col-md-6'>
            <NameForm/>
          </div>
        </div>
        <div className='row'>
            <div className='col-md-6 p-3'>
                <button className='btn form-control btn-secondary'>Previous</button>
            </div>
            <div className='col-md-6 p-3'>
                <button className='btn form-control btn-secondary'>Next</button>
            </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
