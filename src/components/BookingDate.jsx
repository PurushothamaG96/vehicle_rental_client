import React from 'react';
import "./all.css"
import "react-datepicker/dist/react-datepicker.css"
function BookingDate(props) {
    const {handleDate} = props
    return (
        <div className='name-form text-white'>
        <form>
            <h4>No of wheel</h4>
            <div>
            <label  for="startDate">
                    From Date 
                </label>
                <input class="form-control" type="date"  name="exampleRadios" id="startDate" onChange={handleDate}/>
                
            </div>
            <div >
            <label  for="endDate">
                    End Date
                </label>
                <input class="form-control" type="date" name="exampleRadios" id="endDate" onChange={handleDate}/>
                
            </div>
        </form>
    </div>
    );
}

export default BookingDate;