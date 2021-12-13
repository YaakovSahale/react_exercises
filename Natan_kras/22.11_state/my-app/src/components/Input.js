export default function Input() {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        onChange={onChangeHandler}
        type="text"
        placeholder="insert city"
      ></input>
      
    </div>
  );
}

