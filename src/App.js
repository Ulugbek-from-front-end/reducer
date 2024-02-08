import { Fragment, useReducer, useState } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return {
        age: state.age + 1
      }
    case "DEC":
      return {
        age: state.age - 1
      }
    default:
      throw new Error("mistake")
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer,
    { age: 18 })

  const [IsLoading, setIsloading] = useState({
    title: "Loading...",
    status: true
  })

  const initStatueFunc = value => {
    switch (value) {
      case "Loaded":
        setIsloading({
          title: "Loaded, you krisa",
          status: false
        })
        dispatch({ type: "INC" })
        break
      case "Loading": setIsloading({
        title: "service is not working alooo",
        status: true
      })
        dispatch({ type: "DEC" })
        break
      default:
        return IsLoading
    }
  }

  return (
    <Fragment>
      <h2>{IsLoading.title} {state.age}</h2>
      <button onClick={() => initStatueFunc("Loading")}>when Loading</button>
      <button onClick={() => initStatueFunc("Loaded")}>when loaded</button>
    </Fragment>
  )
}
export default App;
