import {useState} from "react";

function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, Click the button",
  })

  const spendGiftCard = () => {
    setGiftCard((prevState) => {
      return {
        ...prevState,
        text: "Your Coupon has been used",
        valid: false,
        instructions: "Please visit our restaurant to renew your gift Card."
      }
    })
  }
  return (
    <div className="App">
      <h1>Gift Card Page</h1>
      <h2>Customer: {giftCard.firstName} {giftCard.lastName}</h2>
      <h3>{giftCard.text}</h3>
      <p>{giftCard.instructions}</p>
      <button onClick={spendGiftCard}>
        Spend Gift Card
      </button>
    </div>
  );
}

export default App;
