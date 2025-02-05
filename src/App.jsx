import { useState } from "react";
import Form from "./components/Form";
import ListItems from "./components/ListItems";
import Title from "./components/Title";

function App() {
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  return (
    <main id="main">
      <div className="container">
        <div className="todo-list">
          <Title />
          <Form description={description} setDescription={setDescription}/>
          <ListItems />
        </div>
      </div>
    </main>
  );
}

export default App;
