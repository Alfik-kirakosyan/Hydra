import "./joinHydra.css"

import Vector16 from '../../Constants/images/Vector16.png'
import { useState } from "react";


const JoinHydra = () => {
    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <section className="join-section">
    <div className='join-container' id="join-hydra">
        <div className="join-header">
            <h1 className="join-h1">
                JOIN HYDRA
            </h1>
            <img className='vector-16' src={Vector16} alt='Vector16-logo' /> 
            <h1 className="join-text">Let's Build Your VR Experience</h1>
        </div>
        <div className="join-form-container">
            <form 
                onSubmit={handleSubmit}
                className='join-form'
            >
                <div className="join-small-inputs">
                    <input 
                        value={inputs.firstName || ""}
                        name='firstName'
                        type='text'
                        placeholder="First Name"
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        value={inputs.lastName || ""}
                        name='lastName'
                        type='text'
                        placeholder="Last Name"
                        onChange={handleChange}
                    />
                </div>
                <div className="join-small-inputs">
                    <input 
                        value={inputs.email || ""}
                        name='email'
                        type='email'
                        placeholder="Email Adress"
                        onChange={handleChange}
                    />
                    <br/>
                    <input 
                        value={inputs.phone || ""}
                        name='phone'
                        type='number'
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />
            
                </div>
                <div className="join-input-subject-container">
                    <input 
                        value={inputs.subject || ""}
                        name='subject'
                        type='text'
                        placeholder="Subject"
                        onChange={handleChange}
                        className='join-input-subject'
                    />
                </div>
                <div>
                    <input 
                        value={inputs.tellUs || ""}
                        name='tellUs'
                        type='text'
                        placeholder="Tell Us Something"
                        onChange={handleChange}
                        className='join-input-tellUs'
                    />
            
                </div>
                <button type="submit" className="hero-button">SEND TO HYDRA</button>
            </form>
        </div>


        
        
    </div>
</section>
)
}

export default JoinHydra