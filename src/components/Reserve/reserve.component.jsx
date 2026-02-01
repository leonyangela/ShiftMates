import React, { useState } from "react";

function ReserveComponent() {
  const reserveInit = {
    date: "",
    time: "",
    type: "",
    guest: "",
  };

  const [reserve, setReserve] = useState(reserveInit);

  const { date, time, type, guest } = reserve;

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="relative flex justify-start items-center gap-4 w-3/4">
        {/* {!date && <span className="placeholder absolute left-2 top-2">DD/MM/YYYY</span>} */}
        <h1 className="w-52">Select Date:</h1>
        <input
          type="date"
          value={date}
          onChange={(e) => setReserve({ ...reserve, date: e.target.value })}
          className="datetimeinput border rounded-sm p-2"
        />
      </div>

      <div className="relative flex justify-start items-center gap-4 w-3/4">
        {/* {!time && <span className="placeholder absolute left-2 top-2">HH:MM</span>} */}
        <h1 className="w-52">Select Time:</h1>
        <input
          type="time"
          value={time}
          onChange={(e) => setReserve({ ...reserve, time: e.target.value })}
          className="datetimeinput border rounded-sm p-2"
          required
        />
      </div>

      <div className="relative flex justify-start items-center gap-4 w-3/4">
        <h1 className="w-52">Select your dining option:</h1>
        <select
          name="type"
          id="type"
          className="border rounded-sm p-2"
          value={type}
          onChange={(e) => setReserve({ ...reserve, type: e.target.value })}
          required
        >
          <option value="" disabled>
            Select your dining type
          </option>
          <option value="casual">Casual Dining</option>
          <option value="private">Private Dining</option>
          <option value="event">Special Event</option>
        </select>
      </div>

      <div className="relative flex justify-start items-center gap-4 w-3/4">
        <h1 className="w-52">Number of guest:</h1>
        <input
          type="number"
          name="guest"
          id="guest"
          className="border rounded-sm p-2"
          placeholder="1"
          min={1}
          max={10}
          value={guest}
          onChange={(e) => setReserve({ ...reserve, guest: e.target.value })}
          required
        />
      </div>

      <div className=" bg-rose-600 text-white w-3/4 text-center mx-auto rounded-lg py-1.5 px-2 mt-8 text-base hover:cursor-pointer hover:bg-rose-300 hover:text-white transition-all duration-200 ease-in-out">
        Book your table now
      </div>
    </div>
  );
}

export default ReserveComponent;
