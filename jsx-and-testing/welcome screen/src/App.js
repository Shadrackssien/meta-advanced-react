const Button = ({type, children, ...buttonProps}) => {
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";

  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  );
};

const LoginButton = ({type, children, ...buttonProps}) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => {
        alert("Logging in!");
      }}
    >
      {children}
    </Button>
  )
}

function App () {
  return (
    <div>
      <header>Little Lemon Restaurant 🍕</header>
      <Button type="primary" onClick={() => {
        alert("signing up")
      }}>
        Sign Up
      </Button>
      <LoginButton type="secondary" onClick={() => {
        alert("Signing up")
      }}>
        Login
      </LoginButton>
    </div>
  );
};

export default App;