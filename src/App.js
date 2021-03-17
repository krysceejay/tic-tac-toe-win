import React, {useReducer} from 'react'
import reducers from './store/Reducers'
import {DataContext} from './store/context'
import Board from './components/Board'

const App = () => {
  const initialState = { 
    xturn: false, 
    won: null, 
    gameOver: false, 
    filledBoxes: []
  }

  const [state, dispatch] = useReducer(reducers, initialState)

  return(
      <DataContext.Provider value={{state, dispatch}}>
          <Board />
      </DataContext.Provider>
  )

}

export default App
