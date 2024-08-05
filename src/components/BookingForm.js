import React, { useState } from 'react';
import '../Style/Homepage.css';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log({ date, time, guests, occasion });
  };

  return (
    <div id='form'>
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px'}}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" value={guests} min="1" max="10" onChange={handleGuestsChange} />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit"id="reservation"value="Make Your reservation" />
    </form>
    </div>
    
  );
}

export default BookingForm;
