import { useReducer } from "react";

function reducer(oldState, newState) {
    return { ...oldState, ...newState }
}

export default function useMyReducer(initialState) {
  const [state, setState] = useReducer(reducer, initialState)

  return [state, setState]
}

function myComponent() {
    const [state, setState] = useMyReducer({field1: true, field2: true})

    setState({field1: false, field3: false})
    setState({field3: true})
}
