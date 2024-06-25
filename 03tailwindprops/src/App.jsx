import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold bg-green-500 p-4">Tailwind</h1>
      <Card name="Sohel Ahmed" title="Software Engineer" />
    </>
  )
}

export default App
