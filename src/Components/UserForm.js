import React, { useEffect, useState } from 'react'


function UserForm({handleSubmitData,selectedUser,btnText}) {
    const [user,setUsername] = useState({username:'',email:''});
    const {username,email} = user;

    useEffect(()=>{
       setUsername({username:selectedUser.username,email:selectedUser.email})
    }, [selectedUser]);

    const handleChangeName=(e)=>{
        const selectedField = e.target.name;
        const selectedValue = e.target.value;
        setUsername(prevState=>{
           return {...prevState,[selectedField]:selectedValue}
        })
    }
    const formSubmitHandler=(e)=>{
      e.preventDefault();
      handleSubmitData(user);
      setUsername({username:'',email:''})
    }
  return (
    <form onSubmit={formSubmitHandler}>
        <div className="field-group">
         <label>User Name</label>
        <input type="text"  id='username' name="username" value={username} required onChange={handleChangeName} />
        </div>
        <div className="field-group">
         <label>Email</label>
        <input type="email"  id='email' name="email" value={email} required  onChange={handleChangeName} />
        </div>
        <button type='submit' className='btn'>{btnText}</button>
    </form>

  )
}

UserForm.defaultProps = {
  selectedUser:{
    username:'',
    email:''
  }
}

export default UserForm
