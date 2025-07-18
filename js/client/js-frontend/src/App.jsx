import './App.css'
import { Users } from './components/Users'
import { StatusMessage } from './components/StatusMessage'
import React from 'react';

function App() {
  return (
    <>
      {/* <Users/> */}

      <StatusMessage message="Some Info" />
      <StatusMessage message="Something went wrong." status="error" />
      <StatusMessage message="Profile saved!" status="success" />
      <StatusMessage message="Warning message" status="warning" />
    </>
  )
}

export default App
