import React from "react";

const usePrevious = (val) => {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = val;
  }, [val])

  return ref.current;
}

function App() {
  const [day, setDay] = React.useState("Monday");
  const prevDay = usePrevious(day);

  const handleClick = () => {
    if (day === "Monday") {
      setDay("Tuesday")
    }else if (day === "Tuesday"){
      setDay("Wednesday")
    }else if (day === "Wednesday"){
      setDay("Thursday")
    }else if (day === "Thursday"){
      setDay("Friday")
    }else if (day === "Friday"){
      setDay("Saturday")
    }else if (day === "Saturday"){
      setDay("Sunday")
    }else if (day === "Sunday"){
      setDay("Monday")
    }
  }
  return (
    <div>
      <h1>Today is {day} </h1>
      {prevDay && (<p>Previous work day was: {prevDay}</p>)}
      <button onClick={handleClick}>
        Get next day
      </button>
    </div>
  )
}

export default App;