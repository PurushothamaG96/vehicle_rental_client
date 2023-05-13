import React from 'react';
import "./all.css"
function NoWheels(props) {
    const {handleWheel} = props
    return (
        <div className='name-form text-white'>
            <form>
                <h4>No of wheel</h4>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="4" onChange={handleWheel} value={4}/>
                    <label class="form-check-label" for="4">
                        4 Wheeler 
                        <img className='img-fluid' src='https://static.vecteezy.com/system/resources/previews/001/193/920/non_2x/convertible-car-png.png'  alt=''/>
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="2" onChange={handleWheel} value={2}  />
                    <label class="form-check-label" for="2">
                        2 Wheeler
                        <img className='img-fluid' src='https://www.freepnglogos.com/uploads/bike-png/black-yamaha-yzf-sport-motorcycle-bike-png-image-pngpix-32.png'  alt=''/>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default NoWheels;