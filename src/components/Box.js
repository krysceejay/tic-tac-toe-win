import React, {useState, useContext, useEffect} from 'react'
import {DataContext} from '../store/context'

const Box = ({ind}) => {
    const {state, dispatch} = useContext(DataContext)
    const { filledBoxes, xturn, removed, restart } = state

    const [value, setValue] = useState('')

    useEffect(() => {
        if(restart){
         setValue('')
        }
    }, [restart])

    const handleBoxClick = () => {
        if(restart){
            dispatch({ type: 'SET_RESTART'})
        }
        
        if(xturn){
            if(value === ''){
                if(filledBoxes.length === 6){
                    console.log('remove one of your piece first')
                    return
                }
                setValue('x')
                if(removed.piece === 'x' && removed.box === ind){
                    console.log('you cannot put your piece where you just removed it! play again or miss a turn')
                }else{
                    dispatch({ type: 'SET_TURN', payload: !xturn })
                }
                
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'x', box: ind} })
            }else{
                if(filledBoxes.length < 6){
                    console.log('put your piece on an empty box')
                    return
                }
                if(value === 'o'){
                    console.log('that is not your piece')
                    return
                }
                setValue('')
                dispatch({ type: 'REMOVE_BOX', payload: {piece: 'x', box: ind} })
            }
        }else{
            if(value === ''){
                if(filledBoxes.length === 6){
                    console.log('remove one of your piece first')
                    return
                }
                setValue('o')
                if(removed.piece === 'o' && removed.box === ind){
                    console.log('you cannot put your piece where you just removed it! play again or miss a turn')
                }else{
                    dispatch({ type: 'SET_TURN', payload: !xturn })
                }
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'o', box: ind} })
            }else{
                if(filledBoxes.length < 6){
                    console.log('put your piece on an empty box')
                    return
                }
                if(value === 'x'){
                    console.log('that is not your piece')
                    return
                }
                setValue('')
                dispatch({ type: 'REMOVE_BOX', payload: {piece: 'o', box: ind} })
            }
        }
    }

    return (
        <div className="box" onClick={handleBoxClick}>
            {value}
        </div>
    )
}

export default Box
