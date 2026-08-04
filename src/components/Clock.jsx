import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());
    const [use24h, setUse24hr] = useState(false)
  // Update the time every second
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date()); // get the current time
    }, 1000);

    // Cleanup: stop the timer when component is removed
    return () => clearInterval(id);
  }, []); // [] = start the timer only once

  const displaytime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !use24h
  })

  useEffect(() => {
    document.title = displaytime
  })

  return (
    <div style={{ textAlign: 'center', padding: '32px' }}>
      <h1 style={{ fontSize: '48px' }}>
       {displaytime}
      </h1>

      <br />

      <h1>
            {time.toLocaleDateString('en-US', {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            })}
      </h1>

      <br />

      <button onClick={() => setUse24hr(v => !v)}>
        {use24h ? "12 hour" : "24 hour"}
      </button>
    </div>
  );
}


export default Clock