export default function Novexs() {
  let counter = 0;

  const increaseCount = () => {
    counter = counter + 1;
    console.log(counter);

    return (
      <div>
        <button style={{ color: "black" }} onClick={increaseCount}>
          0
        </button>
      </div>
    );
  };
}
