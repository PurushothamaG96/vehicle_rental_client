import React from 'react';
import "./all.css"
function VehicleType(props) {
    const { typeVehicle, data, handleType } = props
    return (
        <div className='name-form text-white'>
            <form>
                <h4>What type of {data.wheels===2?"Bike":"Car"}?</h4>
                {
                    typeVehicle.map((val, i) => {
                        return (
                            <div class="form-check" key={i}>
                                <input class="form-check-input" type="radio" value={val} onChange={handleType}/>
                                <label class="form-check-label" for={val}>{val}</label>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default VehicleType;