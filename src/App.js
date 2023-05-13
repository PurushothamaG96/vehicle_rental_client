
import { useState } from 'react';
import './App.css';
import NameForm from './components/NameForm';
import NavBar from './components/NavBar';
import NoWheels from './components/NoWheels';
import VehicleModel from './components/VehicleModel';

function App() {
  const [page, setPage] = useState(1)
  const [isDisable, setIsDisable] = useState(true)
  const [data, setDate] = useState({firstName:"", lastName:"", wheels:0, type:"", startDate:"", endDate:"", vehicleID:0})
  const [fetchedData, setFechedData] = useState([])

  // Next button---------------
  const handleNextPage = ()=>{
    setPage((old)=>{
      return old+1
    })
    if(page === 2){
      fetch(`http://localhost:5500/app/v1/vehicles?wheels=${data.wheels}&type=${data.type}`)
      .then((res)=>res.json())
      .then((data)=>{
        setFechedData(data)
        console.log(data)
      })
      .catch((e)=>console.log(e))
    }
  }

// previous Button----------------------------
  const handlePrevious = ()=>{
    if(page !== 1){
      setPage((old)=>{
        return old-1
      })
    }
  }
// Onchange name function-------------------------
  const handleName = (e)=>{
    e.preventDefault()
    if(e.target.id === "firstName"){
      setDate({...data, firstName : e.target.value})
      if((e.target.value).length > 3 && data.lastName){
        setIsDisable(false)
      }
    }else{
      setDate({...data, lastName : e.target.value})
      if((e.target.value).length && data.firstName.length > 3){
        setIsDisable(false)
      }
    }
  }
  //onchange wheel ----------------------------
  const handleWheel = (e)=>{
    setDate({...data, wheels : e.target.value})
    if(data.wheels=== 2 || data.wheels === 4){
      setIsDisable(false)
    }
  }


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
          {page === 1 ?<div className='col-md-6'><NameForm handleName = {handleName} data={data}/></div>: 
          (page === 2)?<div className='col-md-6'><NoWheels handleWheel={handleWheel}/></div>:
          (page === 3)?<div className='col-md-6'><VehicleModel fetchedData={fetchedData}/></div>:""}
        </div>
        <div className='row'>
            <div className='col-md-6 p-3'>
              { (page !== 1)?<button className='btn form-control btn-secondary' onClick={handlePrevious}>Previous</button>
                :""
              }
                
            </div>
            <div className='col-md-6 p-3'>
                <button className='btn form-control btn-secondary' disabled={isDisable}  onClick={handleNextPage}>Next</button>
            </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
