//TODO LO COMENTADO ES HOOKS
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(response => response.json())
      .then(json => setUser(json));
  }, [count]);

  const suma = () => {
    setCount(count + 1);
  };

  // const resta = () => {
    // setCount(count - 1);
  // };

  return (
  <div>
    <h1>My app</h1>
    <h2>Count: {count}</h2>
    <button onClick = {suma}>+</button>
    <h3>{user.name}</h3>
    {/*{users.map(user => {
      return <h3>{user.name}</h3>
    })}*/}
    {/* <button onClick = {() => setCount(0)}>0</button> */}
    {/* <button onClick = {resta}>-</button> */}


  </div>
  );
};

export default App;
