import { useReducer } from "react";

/**
 * ModalsReducer handles updating the close and open states for the modals
 *
 * @param {Object} modalStates The current state of the modals (i.e. {signUp: false, signIn: false})
 * @param {Object} data Information on how to update the modal (i.e. {modalName: 'signUp', action: 'close'})
 */
function ModalsReducer(modalStates, data) {
  switch (data.action) {
    case "open":
      return {
        ...modalStates,
        [data.modalName]: true,
      };
    case "close":
      return {
        ...modalStates,
        [data.modalName]: false,
      };
    default:
      return modalStates;
  }
}

/**
 * useModalsReducer is an alias for the useReducer that handles modal state
 *
 * @param {Object} initialState The initial state of the modals ({signUp: false, signIn: false})
 */
export default function useModalsReducer(initialState) {
  const [modalStates, updateModalState] = useReducer(
    ModalsReducer,
    initialState
  );

  return [modalStates, updateModalState];
}
