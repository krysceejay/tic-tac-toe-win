import React, {useState, useContext, useEffect} from 'react'
import {toast} from 'react-toastify'
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
                    return toast.error("Click on one of your piece to remove it first.", {theme: "dark"})
                }
                setValue('x')
                if(removed.piece === 'x' && removed.box === ind){
                    toast.error("You cannot put your piece where you just removed it! Play again.", {theme: "dark"})
                }else{
                    dispatch({ type: 'SET_TURN', payload: !xturn })
                }
                
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'x', box: ind} })
            }else{
                if(filledBoxes.length < 6){
                    return toast.error("Please put your piece on an empty box", {theme: "dark"})
                }
                if(value === 'o'){
                    return toast.error("That is not your piece!!", {theme: "dark"})
                }
                setValue('')
                dispatch({ type: 'REMOVE_BOX', payload: {piece: 'x', box: ind} })
            }
        }else{
            if(value === ''){
                if(filledBoxes.length === 6){
                    return toast.error("Click on one of your piece to remove it first.", {theme: "dark"})
                }
                setValue('o')
                if(removed.piece === 'o' && removed.box === ind){
                    toast.error("You cannot put your piece where you just removed it! Play again", {theme: "dark"})
                }else{
                    dispatch({ type: 'SET_TURN', payload: !xturn })
                }
                dispatch({ type: 'ADD_FILLED_BOXES', payload: {piece: 'o', box: ind} })
            }else{
                if(filledBoxes.length < 6){
                    return toast.error("Please put your piece on an empty box", {theme: "dark"})
                }
                if(value === 'x'){
                    return toast.error("That is not your piece!!", {theme: "dark"})
                }
                setValue('')
                dispatch({ type: 'REMOVE_BOX', payload: {piece: 'o', box: ind} })
            }
        }
    }

    const showToken = () => {
        let token
        switch (value) {
            case 'x':
                token = <img src="/img/x.png" alt="X token"/>
                break;

            case 'o':
                token = <img src="/img/o.png" alt="O token"/>
                break;
        
            default:
                token = <div className="empty"></div>
                break;
        }

        return token
    }

    return (
        <div className={`box box-${ind}`} onClick={handleBoxClick}>
            {showToken()}
        </div>
    )
}

export default Box
