import './App.css';
import Header from './components/header/Header';
import Cursor from './components/cursor/Cursor';
import { useEffect } from 'react';

function App() {

  document.addEventListener('mousemove', e => {
    const cursor = document.querySelector('.cursor')

    const x = e.pageX
    const y = e.pageY

    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
  })

  document.addEventListener('click', e => {
    const cursor = document.querySelector('.cursor')

    cursor.classList.add('clicked')
    setTimeout(() => {
      cursor.classList.remove('clicked')
    }, 600)
  })

  useEffect(() => {
    const clickables = document.getElementsByClassName('clickable')
    const cursor = document.querySelector('.cursor')

    for(let i = 0; i < clickables.length; i++) {
      clickables[i].addEventListener('mouseover', () => {
        cursor.classList.add('hovering')
      })
      clickables[i].addEventListener('mouseout', () => {
        cursor.classList.remove('hovering')
      })
    }
  },[])


  return (
    <>
      <Header />
      <Cursor />
    </>
  );
}

export default App;