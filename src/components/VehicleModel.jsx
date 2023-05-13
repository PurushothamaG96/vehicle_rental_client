import React from 'react';

function VehicleModel(props) {
    const {modelVehicle, handleModel} = props
    return (
        <div className='name-form text-white'>
            <form>
                <h4>Select the Model?</h4>
                {
                    modelVehicle.map((val, i) => {
                        return (
                            <div class="form-check" >
                                <input key={i} class="form-check-input" type="radio" id={val.model} value={val._id} onChange={handleModel}/>
                                <label class="form-check-label" for={val.model}>{val.model}</label>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default VehicleModel;