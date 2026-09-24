import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import cat from './image/cat.jpg'
import UseProps from './component/UseProps'
import ICardGallery from './component/ICardGallery'
function App() {
  const name = "Abhay Raj";
  const branch = "CSE";
  const roll = 23;
  const college = "ABES Engineering College";

  return (
    <div>
     <ICardGallery/>
    </div>
  )
}

export default App