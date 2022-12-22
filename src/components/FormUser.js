import React, { useState } from 'react';


const FormUser = () => {

    
    const [email, setEmail] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [passwordUser, setPasswordUser] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
       const addUser = {
        
        id: Math.floor(Math.random() * (1000 - 4) + 4),
        nom: nameUser,
        password: passwordUser,
        email: email

       }
       
     window.localStorage.setItem("currentUser", JSON.stringify(addUser) )
     const storage = window.localStorage
       console.log(storage)

     window.location = "/"

    }

    return (
        <>
      
    
      <div className="signup">
        <form  onSubmit={ (e) => handleSubmit(e) }>
        <div>
          <label htmlFor="email">Email: </label>
          <input name="email" type="mail" onChange={(e) =>  setEmail(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="username">Username: </label>
          <input name="username" type="text" onChange={(e) => setNameUser(e.target.value)}/>
          </div>
          <div>
          <label htmlFor="password">Password: </label>
          <input name="password" type="password" onChange={(e) => setPasswordUser(e.target.value)}/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
        </>
    );
};

export default FormUser;