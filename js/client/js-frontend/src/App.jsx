import './App.css'
import { Users } from './components/Users'
import { StatusMessage } from './components/StatusMessage'
import React from 'react';

function App() {
  return (
    <>
      <Users/>
      <StatusMessage status="success" message="Profile saved!" />
    </>
  )
}

export default App
