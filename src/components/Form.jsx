/* eslint-disable react/prop-types */

function Form({ description, setDescription,onAddItem }) {


  function handlSubmit(e) {
    e.preventDefault();
    if (description === "") {
      return alert("you must add a value");
    }


    const newItem= {
      id: Date.now(),
      description: description,
      selected: false
    };
    onAddItem(newItem); 
    setDescription("");
  }

  return (
    <form className="form" onSubmit={handlSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="Enter a task" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn-add">Add</button>
      </div>
    </form>
  );
}
export default Form;
 