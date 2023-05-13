import React from 'react';
import "./all.css"
function NameForm(props) {
    return (
        <div className='name-form text-white'>
            <form>
            <h3 className='text-center '>First, What is your name?</h3>
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="email" class="form-control" id="firstName" />
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">lastName</label>
                    <input class="form-control" id="lastName"/>
                </div>
            </form>
        </div>
    );
}

export default NameForm;