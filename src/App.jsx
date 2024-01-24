import { useState } from 'react';



export default function App () {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    sname: '',
    titlename: '',
    field: '',
    cname: '',
    ptname: '',
    mainr: '',
    starandend: '',
  });


  function handleChange(e){
    const {name, value} = e.target
    console.log(name,value)
    setFormValues((prev) => {
      return {...prev, [name]:value }
    })
  }
  console.log(formValues)

  return (
    <div className="page">
      <form className="container">
        <section className="contents">
        <h1>CV Application</h1>
          <h2>General Information</h2>
          <input type ="text" name="fname" placeholder="First Name" onChange={handleChange}></input>
          <input type ="text" name="lname" placeholder="Last Name" onChange={handleChange}></input>
          <input type ="text" name="email" placeholder='Email' onChange={handleChange}></input>
        </section>
        <section className="contents">
        <h2>Educational Experience</h2>
          <input type ="text" name="sname" placeholder='School / University' onChange={handleChange}></input>
          <input type ="text" name="titlename" placeholder='Degree' onChange={handleChange}></input>
          <input type ="text" name="field" placeholder='Field' onChange={handleChange}></input>
        </section>
        <section className="contents">
        <h2>Practical Experience</h2>
          <input type ="text" name="cname" placeholder='Company Name' onChange={handleChange}></input>
          <input type ="text" name="ptname" placeholder='Position' onChange={handleChange}></input>
          <input type ="text" name="mainr" placeholder='Responsibilites' onChange={handleChange}></input>
          <input type="text" name ="startandend" placeholder='Start and End Date' onChange={handleChange}></input>
        </section>
        <button type="submit" className="submitbtn">Submit</button>
      </form>
      <div className="container2">
      <h2>Preview</h2>

      <h2>General Information</h2>
          <input type ="text"  value={formValues.fname}></input>
          <input type ="text" value={formValues.lname}></input>
          <input type ="text"  value={formValues.email}></input>
      <h2>Educational Experience</h2>
      <input type ="text"  value={formValues.sname}></input>
          <input type ="text"  value={formValues.titlename}></input>
          <input type ="text" value={formValues.field}></input>
      <h2>Practical Experience</h2>
      <input type ="text" value={formValues.cname}></input>
          <input type ="text"  value={formValues.ptname}></input>
          <input type ="text" value={formValues.mainr}></input>
          <input type="text"  value={formValues.startandend}></input>
      </div>
    </div>
  )
}