import React, {useReducer} from 'react'
import { ToastContainer } from 'react-toastify'
import reducers from './store/Reducers'
import {DataContext} from './store/context'
import Board from './components/Board'

const App = () => {
  const initialState = { 
    xturn: false, 
    won: null, 
    gameOver: false, 
    filledBoxes: [],
    removed: {},
    restart: false,
    score: {oScore: 0, xScore: 0}
  }

  const [state, dispatch] = useReducer(reducers, initialState)

  return(
      <DataContext.Provider value={{state, dispatch}}>
        <ToastContainer />
          <Board />
      </DataContext.Provider>
  )

}

export default App