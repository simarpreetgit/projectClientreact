import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Addform2 = () => {

  
    const [allValues, setAllValues] = useState({
        name: '',
        Phone: '',
        user_message: '',
    });

    const {name,Phone,user_message} = allValues

    const changeHandler = (e) =>{
        setAllValues({...allValues, [e.target.name]: e.target.value})

    }
    const form = useRef();

    const handleSubmit = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_szzrcn3', 'template_iwkik4j', form.current, 'WIgpTvIOgEZN3Tjvq')
        .then((result) => {
            console.log(result.text);
            setAllValues({
                name: '',
                Phone: '',
                user_message: '',
            })   
        }, (error) => {
            console.log(error.text);
        });
          
        
    };

  return (
    <div className="container">
    <form ref={form} onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="First Name">Name</label>
          <input value={name} type="text" className="form-control" name="name" onChange={changeHandler} />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Last Name">Phone</label>
          <input value={Phone} type="text" className="form-control" name="Phone" onChange={changeHandler} />
        </div>
    
        <div className="form-group col-md-6">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            className="form-control"
            id="inputmessage4"
            name="user_message"
            value={user_message}
            onChange={changeHandler}
          />
           <br></br><button  type="submit" className="btn btn-primary">
        Book
      </button>
        </div>
      </div>

     
    </form>
  </div>
);
}

export default Addform2
