/* eslint-disable react/prop-types */

function Form({ description, setDescription }) {
  function handlSubmit(e) {
    e.preventDefault();
    if (description === "") {
      return alert("you must add a value");
    }
    const newItem= {
      id: Date.now(),
      description,
      selected: false
    };
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
