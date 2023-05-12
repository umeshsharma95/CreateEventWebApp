import React from 'react'
import EventForm from '../components/EventForm'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Header />
      <div className='mt-4 m-3'>
          <h2 className='mb-3'>Create An Event</h2>
          <EventForm />
      </div>
    </>
  )
}

export default Home