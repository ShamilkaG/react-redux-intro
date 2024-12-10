
import './App.css'
import {increment} from "./utilities/counterSlice.js";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const incrementDispatch = useDispatch()
    const number = useSelector((state)=> state.counter.number)

  return (
      <div>
        <div>
          <button
              aria-label="Increment value"
              // onClick={() => dispatch(increment())}
              onClick={()=>{
                incrementDispatch(increment())
              }}
          >
            Increment
          </button>
          <div>{number}</div>

        </div>
      </div>
  )
}

export default App
