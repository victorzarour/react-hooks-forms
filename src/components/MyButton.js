function MyButton() {
    function handleClick(val) {
      console.log(val + "!!");
    }
    return (
      <div>
        <button onClick={() => handleClick("Hello World")}>Click Me!</button>
      </div>
    );
  }

export default MyButton
