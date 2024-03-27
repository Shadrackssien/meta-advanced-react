
import './App.css';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span className="UserName">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  )
};

const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>LoremNisi ut proident excepteur labore et laborum non 
        voluptate fugiat ut laboris ad. Incididunt est enim non 
        laboris tempor et excepteur. Ex cupidatat officia do in aute. 
        Ullamco minim est eiusmod nostrud incididunt excepteur incididunt 
        mollit cillum non. Anim sit mollit elit reprehenderit cupidatat.
        Ea laborum non laboris irure enim excepteur. Eiusmod ea non Lorem 
        duis ea proident. Voluptate quis ea non aliqua eiusmod sint qui amet
         nulla cillum eiusmod irure. Consequat voluptate et incididunt in 
         officia nostrud labore exercitation sunt ipsum. Aliqua nulla eiusmod 
         aliquip tempor velit laborum deserunt do labore excepteur. Elit do aliqua
          dolor eu deserunt nostrud voluptate in eu nisi.
      </p>
      <p>Written by {user.name}</p>
        
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Page />
    </div>
  );
};

function Root() {
  return (
    <div className='hey'>
      <UserProvider>
        <App />
      </UserProvider> 
    </div>
    
  )
}

export default Root;
