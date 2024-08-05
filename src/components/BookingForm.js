import React, { useState } from 'react';
import '../Style/Homepage.css';

const BookingForm = (props) =>{
  const [date, setDate] =useState("");
  const [times, setTimes] =useState("");
  const [guests, setGuests] =useState("");
  const [occasion, setOccation] =useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.SubmitForm(e);
  }
  const handleChange =(e) => {
    setDate(e);
    props.dispatch(e);
  }
  return(
      <sction>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose Date:</label>
              <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required/>
            </div>

            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                <option value="">Select a Time</option>
                {
                  props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                }
              </select>
            </div>
            <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
            </div>

            <div>
              <label htmlFor='book-occasion'>Occasioon:</label>
              <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccation(e.target.value)}>
                <option>Select an Option</option>
                <option>Anniversary</option>
                <option>Birthday</option>
              </select>
            </div>

            <div className='btnReceive'>
              <input aria-label='On Click' type='submit' value={"Make your Reservation"}/>
            </div>
          </fieldset>
        </form>
      </sction>
    )
};

export default BookingForm;
