import React from 'react'
import s from './Touch.module.scss'
const Touch = () => {
  return (
    <>
      <section>
      <div className="container">
        <div className={s.wrapper}>

            <div className={s.text}>
                <h3>CONTACT US</h3>
                <h1>Get in Touch</h1>
                <p>At VRNas, we're always happy to hear from our clients and potential clients. Whether you have a question about our VR services, want to discuss a potential project, or just want to say hello, we're here to help.</p>
            </div>

            <div className={s.input}>
            <div>
                <input placeholder='First Name' type="text" name="" id="" />
                <input placeholder='Last Name' type="text" name="" id="" />
                <input placeholder='Email' type="text" name="" id="" />
                <input placeholder='Phone Number' type="number" name="" id="" />
            
                
                </div>
                <div className="btn">
            <input placeholder='Message' type="text" name="" id="" />
            <button>send message</button>
            </div>
            </div>

        </div>
      </div>  
      </section>  
    </>
  )
}

export default Touch