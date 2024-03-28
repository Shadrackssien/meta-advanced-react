import React from "react";

function GoalForm(props){

  const [formData, setFormData] = React.useState({
    goal: "",
    by: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const submitHandler  = (e) => {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: " ", by: " "});
  };
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          name="goal" 
          placeholder="Goal" 
          value={FormData.goal}
          onChange={changeHandler} />
          <input 
          type="text" 
          name="by" 
          placeholder="By..." 
          value={FormData.by}
          onChange={changeHandler} />
          <button>Submit Goal</button>
      </form>
    </>
  )
}

function ListOfGoals(props){
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [allGoals, updateAllGoals] = React.useState([]);

  const addGoal = (goal) => {
    updateAllGoals([...allGoals, goal])
  }
  return (
    <div>
    <GoalForm onAdd={addGoal} />
    <ListOfGoals allGoals={allGoals}/>
  </div>
  )
}

export default App;
