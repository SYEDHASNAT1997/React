import React from 'react'
import './Receivemcss'

export const ReceiveData = () => {
  let fullname = localStorage.getItem('NAME')
  return (
    <div className="main">
      <h1> all data from Matform will be shown here</h1>
      <form>
        <label>Nmae</label>
        <input type='text' value={localStorage.getItem('fullname')}></input>
        <label>Age</label>
        <input type='number' value={localStorage.getItem('age')}></input>
        <h3>hobbies</h3>
        <input
          type='text'
          value={
            localStorage.getItem('snokeer is hobby') == 'true' ? 'snooker' : ''
          }
        ></input>
        <input
          type='text'
          value={
            localStorage.getItem('cricket is hobby') == 'true' ? 'cricket' : ''
          }
        ></input>
        <input
          type='text'
          value={
            localStorage.getItem('Netflix is hobby') == 'true' ? 'Netflix' : ''
          }
        ></input>
        <input
          type='text'
          value={
            localStorage.getItem('Exploring  is hobby') == 'true'
              ? 'Exploring'
              : ''
          }
        ></input>
        <input type='dateTime' value={localStorage.getItem('date')}></input>
        <input
          type='text'
          defaultValue={localStorage.getItem('sports')}
        ></input>
        <input
          type='text'
          defaultValue={localStorage.getItem('capital')}
        ></input>
        <input
          type='text'
          defaultValue={localStorage.getItem('third city')}
        ></input>
        <input
          type='text'
          defaultValue={localStorage.getItem('fourth')}
        ></input>
        <input type='text' defaultValue={localStorage.getItem('fifth')}></input>
      </form>
    </div>
  )
}
