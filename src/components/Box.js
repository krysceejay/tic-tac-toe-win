import React, {useState, useRef, useContext} from 'react'
import {DataContext} from '../store/context'

const Box = ({ind}) => {
    const {state, dispatch} = useContext(DataContext)
    const { filledBoxes, xturn } = state

    const [value, setValue] = useState('')
    const myref = useRef()
    const handleBoxClick = () => {
        if(xturn){
            if(myref.current.innerHTML === ''){
                setValue('x')
                dispatch({ type: 'SET_TURN', payload: !xturn })
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'x', box: ind} })
            }else{
                console.log('box is not empty')
                setValue('x')
                dispatch({ type: 'SET_TURN', payload: !xturn })
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'x', box: ind} })
            }
        }else{
            if(myref.current.innerHTML === ''){
                setValue('o')
                dispatch({ type: 'SET_TURN', payload: !xturn })
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'o', box: ind} })
            }else{
                console.log('box is not empty')
                setValue('o')
                dispatch({ type: 'SET_TURN', payload: !xturn })
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'o', box: ind} })
            }
        }

        //console.log(value,ind)
    }

    return (
        <div className="box" onClick={handleBoxClick} ref={myref}>
            {value}
        </div>
    )
}

export default Box
