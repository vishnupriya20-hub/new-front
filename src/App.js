import React, { useState } from 'react';
import './index.css';
import api from './utils/api';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [number_1, setNumber1] = useState(0);
  const [number_2, setNumber2] = useState(0);
  const [total_sum, setTotal] = useState(number_1 + number_2);
  const [result, setTotal1] = useState(number_1+number_2);

  function addTT() {
    setTotal(number_1+number_2)
    api.post('/calculate/add', { number_1, number_2 })
      .then(response => {
        console.log('>>> response.data => ', response.data);
        const { data: { result } } = response;
        setTotal1(result);
      })
      .catch(error => {
        console.log('>>> error => ', error);
      });
  }

  return (
    <div>
      <div className="headerofpage">
          <div className="inner_headerpri">
            <div className="logo_containerbox">
              <img src="https://thumbs.dreamstime.com/b/vp-logo-design-initial-letter-216399968.jpg" height="75" width="75" alt="" />
              <h1>Hola it's ME</h1>
            </div>
            <nav class="navbar background">
              <ul class="nav-list">
               <li><a href="#samplenav1">sample nav1 </a></li>
                <li><a href="#samplenav2">sample nav2</a></li>
              </ul>
            </nav>
          </div>
      </div>
      
      <section className="section">
        <div className="leftsidepage">
          <p>
            <br>
            </br>
          </p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeawKIRM6-3aDoDZNp0o06RrPzIgm6BnDHYKqHSYy1g&s" height="200" width="200" alt="" />

        </div>
      </section>
      <section className="section">
        <div className="rightsidepage">
          <p className="text-small"></p>
          <blockquote contentEditable="true">
            <div rows="30" cols="50">
              <h2>Vishnu Priya Kunapareddy</h2>
              <br></br>
              <p> 
                Hi all. Here is my bio. I am studying matser's of computer science in univerity at Albany. I am a Motivated and self-directed Engineer with exceptional communication skills, who Applies analytic methodology and effective technology to lead projects and ideas. I am capable of understanding technical information and can apply those skills at different practical issues.
                I completed my undergrad from VNR VJIET in 2021 and worked few years for a reowned compnay. 
                <br></br>You are follow me @  <b>Vishnupriya20</b>
              </p>
            </div>
            
          </blockquote>
        </div>
      </section>
      <div className="App">
        <div className="number-input">
          <div>
            <h4>Enter the first number</h4>
            <form method="POST" action="/">
              <input
                
                type="number"
                value={number_1}
                onChange={(S) => setNumber1(+S.target.value)}
              />
            </form>
          </div>
          <div>
            
            <h4>Enter the second number</h4>
            <form method="POST" action="/">
               <input
                  type="number"
                  value={number_2}
                  onChange={(S) => setNumber2(+S.target.value)}
                />
            </form>
          </div>
        </div>
        <button onClick={addTT}>ADD</button>
        <h4>the sum from react : {total_sum}</h4>

        <h4>the sum from backend  : {result}</h4>
      </div>
    </div>
  );
}
export default App;
