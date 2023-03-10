import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <main
      className="w-full h-screen flex flex-col gap-8 items-center
      justify-center"
    >
      <h1
        className="text-3xl underline
        font-bold uppercase"
      >
        counter
      </h1>
      <span className="font-semibold text-2xl">{count}</span>
      <button
        className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <button
        className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
        onClick={() => dispatch(decrement())}
      >
        decrement
      </button>
    </main>
  );
}

export default App;
