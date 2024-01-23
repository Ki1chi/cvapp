import { useState } from 'react';



export default function App () {
  


  return (
    <div className="page">
      <form className="container">
        <section className="contents">
        <h1>CV Application</h1>
          <h2>General Information</h2>
          <input type ="text" name="fname" placeholder="First Name"></input>
          <input type ="text" name="lname" placeholder="Last Name"></input>
          <input type ="text" name="email" placeholder='Email'></input>
        </section>
        <section className="contents">
        <h2>Educational Experience</h2>
          <input type ="text" name="sname" placeholder='School / University'></input>
          <input type ="text" name="titlename" placeholder='Degree'></input>
          <input type ="text" name="field" placeholder='Field'></input>
        </section>
        <section className="contents">
        <h2>Practical Experience</h2>
          <input type ="text" name="cname" placeholder='Company Name'></input>
          <input type ="text" name="ptname" placeholder='Position'></input>
          <input type ="text" name="mainr" placeholder='Responsibilites'></input>
          <input type="text" name ="startandend" placeholder='Start and End Date'></input>
        </section>
        <button type="submit" className="submitbtn">Submit</button>
      </form>
      <div className="container2">
      <h2></h2>
      <h2>General Information</h2>
      <h3 className="text"></h3>
      <h3 className="text"></h3>
      <h3 className="text"></h3>
      <h2>Educational Experience</h2>
      <h3 className="text"></h3>
      <h3 className="text"></h3>
      <h3 className="text"></h3>
      <h2>Practical Experience</h2>
      <h3 className="text"></h3>
      <h3 className="text"></h3>
      <h3 className="text"></h3>
      <h3 className="text"></h3>
      </div>
    </div>
  )
}