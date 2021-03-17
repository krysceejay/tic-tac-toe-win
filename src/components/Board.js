import React, {useEffect, useContext} from 'react'
import '../styles/main.scss'
import Box from './Box'
import {DataContext} from '../store/context'

const Board = () => {
    const {state, dispatch} = useContext(DataContext)
    const { filledBoxes, won, gameOver } = state
    useEffect(() => {
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
      
          //console.log(xPieces)
      
          //All Horizontal 
          //1,2,3 4,5,6 7,8,9
      
          //All Vertical
          //1,4,7 2,5,8 3,6,9
      
          //All Diagonal
          //1,5,9 3,5,7
        }
        possibleMatches()
      }, [filledBoxes])

    //   const handleOnClick = (box, piece) => {
    //     setTurn(xturn => !xturn)
    //     setFilledBoxes([{piece, box}, ...filledBoxes])
    //     //collect index and value
    //   }
    
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
    

    return (
        <div className="container">
        {gameOver && <div className="game-over">
            Game over
            <p>{won} won</p>
          </div>
        }
        <div className="box-container">
          <Box ind="1" />
          <Box ind="2" />
          <Box ind="3" />
          <Box ind="4" />
          <Box ind="5" />
          <Box ind="6" />
          <Box ind="7" />
          <Box ind="8" />
          <Box ind="9" />
        </div>
      </div>
    )
}

export default Board
