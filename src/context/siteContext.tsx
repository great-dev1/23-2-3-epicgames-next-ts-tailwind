import React, { createContext, useReducer, useCallback, Dispatch } from 'react'

const defaultState = {
    name: 'My Site',
}

const SiteContext = createContext(defaultState)

// Define a type for the state object
type State = typeof defaultState
type Action = { type: 'SET_VALUE'; key: string; value: any }

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.key]: action.value
      }
    default:
      return state
  }
}

type Props = {
  children: React.ReactNode
}

const SiteProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  // Wrap dispatch function in a useCallback hook so that it doesn't change on every render
  const value = useCallback(
    () => [state, dispatch] as [State, Dispatch<Action>],
    [state, dispatch]
  )

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>
}

// Export the context object and provider component
export default SiteContext
export { SiteProvider }
