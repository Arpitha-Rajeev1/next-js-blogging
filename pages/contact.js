import React, { useState } from 'react'

const contact = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        desc: desc
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        alert("Thanks for submitting!")
        setname('')
        setphone('')
        setemail('')
        setdesc('')
      });
  }

  function handleChange(e) {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
  }

  return (
    <form onSubmit={handleSubmit} method='POST' className='form'>
      <div>
        <label htmlFor="name">Name</label> <br />
        <input type="text" value={name} onChange={handleChange} name='name' />
      </div>
      <div>
        <label htmlFor="phone">Phone</label> <br />
        <input type="text" value={phone} onChange={handleChange} name='phone' />
      </div>
      <div>
        <label htmlFor="desc">Description</label> <br />
        <textarea type="text" value={desc} onChange={handleChange} name='desc' />
      </div>
      <div>
        <label htmlFor="email">Email</label> <br />
        <input type="email" value={email} onChange={handleChange} name='email' />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default contact