import React from 'react';
import "./all.css"
function VehicleModel(props) {
    const {fetchData} = props
    return (
        <div>
            <form>
                {
                    fetchData.map((val, i)=>{
                        return(
                            <>
                            </>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default VehicleModel;