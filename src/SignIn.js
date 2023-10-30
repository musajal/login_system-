import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {

    const formStyle = {
        maxWidth: '300px', // Set your desired width here
        margin: '0 auto', // Center the form horizontally
      };

      const navigate = useNavigate()
      //lets have useState hooks here
      const [email, setEmail] = useState()
      const [password, setPassword] = useState()

       console.log(email)
       console.log(password)

       // lets have the button logic here
       const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('https://auth-system-api.onrender.com/signin', {password, email})
        .then(result=>{console.log(result)
         navigate('/homepage')
        })
         
        .catch(err=>console.log(err))
        
 
       }

  return (
    <div>
           <h2 className='text-center p-4'>Login here</h2>

                  <Form style={formStyle} onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  name="username" onChange={(e)=>setEmail(e.target.value)} />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Link to='/signin'>login</Link>
                </Form>

           <Link to='/signup'>SignUp</Link>
           
    </div>
  )
}
