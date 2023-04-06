import React from 'react'

const Contact = () => {

  

  return (
    <div id='Contact' className='Contact'>
        <h1>Contact us</h1>
        <div className='formm'>
            <form>
                <input required type="text" placeholder='first name'></input>
                <input type="text" placeholder='last name'></input>
                <input type="text" placeholder='email address'></input>
                <input type="text" placeholder='subject'></input>
                <textarea type="text" placeholder='type your message here..'></textarea>
                <input className='submit' type="submit"></input>
            </form>
            <div>
                <i className="fa-sharp fa-solid fa-map-location-dot"></i>
                <p>6th Oct - Cairo - Egypt</p>
                <i className="fa-solid fa-phone"></i>
                <p>+20-106-082-9215</p>
            </div>
        </div>
    </div>
  )
}

export default Contact