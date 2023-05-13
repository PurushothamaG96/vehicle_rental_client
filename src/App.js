
import { useState } from 'react';
import './App.css';
import NameForm from './components/NameForm';
import NavBar from './components/NavBar';
import NoWheels from './components/NoWheels';
import VehicleModel from './components/VehicleModel';
import VehicleType from './components/VehicleType';
import BookingDate from './components/BookingDate';

function App() {
  const [page, setPage] = useState(1)
  const [isDisable, setIsDisable] = useState(true)
  const [data, setDate] = useState({firstName:"", lastName:"", wheels:0, type:"", model:"",startDate:"", endDate:"", vehicleId:null })
  const [fetchedData, setFechedData] = useState([])
  const [typeVehicle, setType] = useState([])
  const [modelVehicle, setModelVehicle] = useState([])
  const [finish, setFinish] = useState("Next")
  const [failed, setFailed] = useState("")
  const [success, setSuccess] = useState("")

  // Next button---------------
  const handleNextPage = ()=>{
    if(page === 5){
      fetch("http://localhost:5500/app/v1/vehicles",{
        method:"post",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      })
      .then((res)=>res.json())
      .then((mess)=>{
        if(mess.status=== "Failed"){
          setFailed(mess.message)
        }else{
          setSuccess(mess.message)
          setTimeout(()=>{
            setPage(1)
            setDate({firstName:"", lastName:"", wheels:0, type:"", model:"",startDate:"", endDate:"", vehicleId:null })
            setFailed("")
            setSuccess("")
            setFinish("Next")
          }, 2000)
          
        }
      }).catch((e)=>{
        console.log(e.message)
      })
    }
    else if(page === 1){
      fetch(`http://localhost:5500/app/v1/vehicles?wheels=${data.wheels}`)
      .then((res)=>res.json())
      .then((data)=>{
        setFechedData(data)
        setPage((old)=>{
          return old+1
        })
        
      })
      .catch((e)=>console.log(e))
    }
    else if(page === 2){
      let filterTempData = fetchedData.filter((val)=>{
        console.log(val.wheels, data.wheels)
        return val.wheels == data.wheels
      })
      console.log(filterTempData)
      let set = new Set()
        let temp = []
        for(let i = 0; i < filterTempData.length; i++){
          set.add(filterTempData[i].type)
        }
        set.forEach((val)=>temp.push(val))
        setType(temp)
        setPage((old)=>{
          return old+1
        })
    }
    else if(page === 3){
      let temp = fetchedData.filter((val)=>val.type===data.type)
      setModelVehicle(temp)
      setPage((old)=>{
        return old+1
      })
    }
    else{
      setPage((old)=>{
        return old+1
      })
    }
    setIsDisable(true)
  }

// previous Button----------------------------
  const handlePrevious = ()=>{
    if(page === 1){
      return
    }
    setPage((old)=>old-1)
    setFinish("Next")
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
    e.preventDefault()
    setDate({...data, wheels : e.target.value})
    if(e.target.value){
      setIsDisable(false)
    }
  }
  //onchange type of vehicle function------------------
  const handleType = (e) =>{
    e.preventDefault()
    setDate({...data, type:e.target.value})
    if(e.target.value){
      setIsDisable(false)
    }
  }
  //onChange model of vehicle function---------------------
  const handleModel = (e)=>{
    e.preventDefault()
    setDate({...data, vehicleId: e.target.value, model:e.target.id})
    if(e.target.value){
      setIsDisable(false)
    }
  }

  //onchange date of booking function----------------------
  const handleDate=(e)=>{
    if(e.target.id === "startDate"){
      setDate({...data, startDate: e.target.value})
      if((data.end && e.target.value)){
        setFinish("Finish") 
        setIsDisable(false)
    }
  }
    else{
      setDate({...data, endDate: e.target.value}) 
      if((data.startDate && e.target.value)){
        setFinish("Finish")
        setIsDisable(false)
      }
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
          (page === 3)?<div className='col-md-6'><VehicleType typeVehicle={typeVehicle} data={data} handleType={handleType}/></div>:
          (page === 4)?<div className='col-md-6'><VehicleModel modelVehicle={modelVehicle} handleModel={handleModel}/></div>:
          (page === 5)?<div className='col-md-6'><BookingDate handleDate={handleDate} data={data}/></div>:""}
        </div>
        {(failed || success)?<div className='row text-center'>
            <div className='col-12'>
              <h3 className='text-danger p-2 bg-secondary'>{failed}</h3>
              <h3 className='text-success p-2  bg-secondary'>{success}</h3>
            </div>
        </div>:""}
        <div className='row'>
            <div className='col-md-6 p-3'>
              { (page !== 1)?<button className='btn form-control btn-secondary' onClick={handlePrevious}>Previous</button>
                :""
              }
                
            </div>
            <div className='col-md-6 p-3'>
                <button className='btn form-control btn-secondary' disabled={isDisable}  onClick={handleNextPage}>{finish}</button>
            </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
