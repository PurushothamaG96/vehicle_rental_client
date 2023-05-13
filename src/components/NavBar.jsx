import React from 'react';

function NavBar(props) {
    return (
        <>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="https://pngimg.com/uploads/chevrolet/%D1%81hevrolet_PNG117.png" alt="" width="100"/>
                        <h4 className='text-info' style={{display:'inline-block'}}><span className='text-primary'>VEHICLE</span> RENTAL</h4>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;