/* eslint-disable react/prop-types */

function Form({ description, setDescription }) {
  return (
    <form className="form">
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
