import React, {useEffect, useContext} from 'react'
import '../styles/main.scss'
import Box from './Box'
import {DataContext} from '../store/context'

const Board = () => {
    const {state, dispatch} = useContext(DataContext)
    const { filledBoxes, won, gameOver } = state
    useEffect(() => {
      console.log(filledBoxes)
        const possibleMatches = () => {
          if(filledBoxes.length < 5){
            return
          }
      
          let xPieces = filledBoxes.filter(item => {
            return item.piece === 'x'
          })
      
          let oPieces = filledBoxes.filter(item => {
            return item.piece === 'o'
          })
      
          let wonX = threeBoxMatch(xPieces)
          let wonO = threeBoxMatch(oPieces)
      
          if(wonX === 'won'){
            console.log('x won')
            dispatch({ type: 'SET_WON', payload: 'x' })
            dispatch({ type: 'SET_GAMEOVER', payload: true })
            return
          }
          if(wonO === 'won'){
            console.log('o won')
            dispatch({ type: 'SET_WON', payload: 'o' })
            dispatch({ type: 'SET_GAMEOVER', payload: true })
            return
          }
        }
        possibleMatches()
      }, [filledBoxes])
    
      const threeBoxMatch = (filteredArr) => {
        //Horizontal
        if(filteredArr.some(i => i.box === '1') && filteredArr.some(i => i.box === '2') && filteredArr.some(i => i.box === '3') ){
          return 'won'
        }
    
        if(filteredArr.some(i => i.box === '4') && filteredArr.some(i => i.box === '5') && filteredArr.some(i => i.box === '6') ){
          return 'won'
        }
    
        if(filteredArr.some(i => i.box === '7') && filteredArr.some(i => i.box === '8') && filteredArr.some(i => i.box === '9') ){
          return 'won'
        }
    
        //Vertical
        if(filteredArr.some(i => i.box === '1') && filteredArr.some(i => i.box === '4') && filteredArr.some(i => i.box === '7') ){
          return 'won'
        }
    
        if(filteredArr.some(i => i.box === '2') && filteredArr.some(i => i.box === '5') && filteredArr.some(i => i.box === '8') ){
          return 'won'
        }
    
        if(filteredArr.some(i => i.box === '3') && filteredArr.some(i => i.box === '6') && filteredArr.some(i => i.box === '9') ){
          return 'won'
        }
    
        //Diagonal
        if(filteredArr.some(i => i.box === '1') && filteredArr.some(i => i.box === '5') && filteredArr.some(i => i.box === '9') ){
          return 'won'
        }
    
        if(filteredArr.some(i => i.box === '3') && filteredArr.some(i => i.box === '5') && filteredArr.some(i => i.box === '7') ){
          return 'won'
        }
    
        return 'no win'
      }

      const restartGame = () => {
        dispatch({ type: 'RESTART'})
      }
    

    return (
        <div className="container">
        {gameOver && <div className="game-over">
            Game over
            <p>{won} won</p>
            <button onClick={restartGame}>Restart</button>
          </div>
        }
        <div className="box-container">
          {
            Array.from(Array(9).keys()).map((_, index) => {
              return <Box key={index} ind={`${index + 1}`} />
            })
          }
        </div>
      </div>
    )
}

export default Board
