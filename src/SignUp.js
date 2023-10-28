import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export default function SignUp() {

    const formStyle =
    {
        maxWidth: '300px', // Set your desired width here
        margin: '0 auto', // Center the form horizontally
      };

      const[username, setUsername] = useState()
      const[password, setPassword] = useState()
      const[email, setEmail] = useState()

      console.log(email)
       console.log(password)
       console.log(username )

       const navigate = useNavigate()
      const handleSubmit = (e) => {
       e.preventDefault();
       
       axios.post('http://localhost:8033/register', {username, password, email})
       .then(result=>{console.log(result)
        navigate('/signin')
       })
        
       .catch(err=>console.log(err))
       

      }

  return (
    <div>
               <h1 className='text-center'>Registration</h1>

          <Form style={formStyle} onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" name="username" onChange={(e)=>setUsername(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"  onChange={(e)=>setEmail(e.target.value)} />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"  onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        SignUP
      </Button>
      <Link to='/signin'>login</Link>
    </Form>
    
      
    </div>
  )
}
