import React from 'react'
import './Contact.css';

const Contact = () => {  
  return (
   
<div className='container-fluid text-center mb-3 mt-2' id="ContactID">

    <div className='cntdiv'>
  
<h1 className='mb-5'>Contact Us</h1>

<form id="contact_form" name="contact_form" method="post">

    <div class="mb-5 row">   
        <div class="col">
            <label>First Name</label>
            <input type="text" required maxlength="50" class="form-control" id="first_name" name="first_name"/>
        </div>

        <div class="col">
            <label>Last Name</label>
            <input type="text" required maxlength="50" class="form-control" id="last_name" name="last_name"/>
        </div>

    </div>
    <div class="mb-5 row">
        <div class="col">
            <label for="email_addr">Email address</label>
            <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                placeholder="name@example.com"/>
        </div>

        <div class="col">
            <label for="phone_input">Phone</label>
            <input type="tel" required maxlength="14" class="form-control" id="phone_input" name="Phone"
                placeholder="Phone"/>
        </div>

    </div>

    <div class="mb-5">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="5"></textarea>
    </div>

    <button type="submit" class="btn btn-primary px-4  btn-lg">Submit</button>

</form>

</div>

</div>

  )
}

export default Contact