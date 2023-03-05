import './App.css';
import Navbar from './components/navbar/Navbar';
import Button from './components/button/Button'

function App() {

  const handleClick = (name) => {
    alert("Clickeameeee!!! " + name);
  };

  return (
    <>
      <Navbar/>
      <Button text="Home" number={0} clickazo = {handleClick}/>
      <Button text="About" number={1} clickazo = {handleClick}/>
      <Button text="Contact" number={2} clickazo = {handleClick}/>
      <h1>My App</h1>
    </>
  );
}

export default App;