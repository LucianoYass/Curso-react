import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import './App.css';
import ButtonJSX from "./ButtonJSX";
import RecipeReviewCard from "./RecipeReviewCard/index";
import productos from "../productos.json";

function App() {
  console.log(productos);
  return (
    <>
      <Button color="secondary" onClick = {() => alert("Click!")} variant="text">
        TEXTO
      </Button>
      <Button variant="contained" endIcon={<SendIcon/>}>Send</Button>
      <Button variant="outlined" endIcon={<DeleteIcon/>}>Delete</Button>
      <ButtonJSX variant="red"/>
      {productos.map(producto => (
      <RecipeReviewCard producto={producto}/>
      ))}
    </>
  )
}

export default App;