import React, { useState } from 'react'

function EventForm() {
    const [state, setState] = useState({
        eventName: '',
        eventAddress: '',
        eventDateTime: '',
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        console.log('state', state);
        const {eventName, eventAddress, eventDateTime} = state
        if(eventName?.trim() && eventAddress?.trim() && eventDateTime) {
            const event = {
                type: 'createEvent',
                data: {
                    eventName: eventName?.trim(),
                    eventAddress: eventAddress?.trim(),
                    eventDateTime
                }
            }
            window?.ReactNativeWebView?.postMessage(JSON.stringify(event))
        } else {
            alert('Please fill all fields to create event')
        }
    }

  return (
    <div>
        <div class="mb-3">
            <label className="form-label">Event Name</label>
            <input type="text" class="form-control" placeholder="Enter Event Name" name="eventName" id="eventName" value={state.eventName} onChange={handleChange} />
        </div>
        <div class="mb-3">
            <label className="form-label">Event Address</label>
            <input type="text" class="form-control" placeholder="Enter Event Address" name="eventAddress" id="eventAddress" value={state.eventAddress} onChange={handleChange} />
        </div>
        <div class="mb-3">
            <label className="form-label">Event Date and Time</label>
            <input type="datetime-local" id='eventDateTime' className="form-control" placeholder="Enter Event Date and Time" name="eventDateTime" value={state.eventDateTime} onChange={handleChange} />
        </div>
        <button className='btn btn-primary' id='submitEventForm' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default EventForm