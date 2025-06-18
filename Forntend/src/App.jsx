import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { useEffect } from 'react'
import './App.css'


function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/')
    .then((response) =>{
        setJokes(response.data)
    }
  )
  .catch((error)=>{
    console.error(error)
  })

  })

 return (
        <div>
            <nav class="navbar background">
              <h1>Event Ease</h1>
                <ul class="nav-list">
                    <div class="logo">
                        
                    </div>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="/logout">logout</a>
                    </li>
                </ul>

               
            </nav>

            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        
                        <p class="text-small">
                          
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        
                        <p class="text-small">
                           
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        
                        <p class="text-small">
                           
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        
                        <p class="text-small">
                            
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default App
