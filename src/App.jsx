import "./App.css";
import "./index.css";
import Keypad from "./components/keypad";
function App() {
  return (
    <>
      <div className="border border-black w-6/12 m-auto my-10 overflow-auto">
        <div className="flex justify-center ">
          <input type="text" className="border border-gray-500 w-6/12 my-5 " />
        </div>
        <div className="grid  grid-cols-3  mx-50 content-center">
          <Keypad />
        </div>
      </div>
    </>
  );
}

export default App;
