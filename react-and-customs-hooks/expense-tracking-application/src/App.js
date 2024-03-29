import {useReducer} from "react";

const reducer = (state, action) => {
  if (action.type === "buy_ingredients") return {money: state.money - 10};
  if (action.type === "sell_a_meal") return {money: state.money + 10};
  if (action.type === "celebrity") return {money: state.money +100};

  return state;
}

function App() {
  const initialState = {money: 0};
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: "buy_ingredients"})}>
          Shopping for Veggies
        </button>
        <button onClick={() => dispatch({type: "sell_a_meal"})}>
          Serve a meal to the customer
        </button>
        <button onClick={() => dispatch({type: "celebrity"})}>
          celebrity Visit
        </button>
      </div>
    </div>
  )
}

export default App;