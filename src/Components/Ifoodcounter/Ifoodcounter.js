import {useState} from 'react'
import './Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(0);
    const [buttonStayle, setButtonStyle] = useState('counter-button-minus-desactive');

    const down = function (value){
        
        if(value > 0) 
            setValue(value-1)
            
            value <= 1 ? setButtonStyle('counter-button-minus-desactive') : setButtonStyle('counter-button-minus-active')
    }

    const up = function(value){
        setValue((value+1))
        setButtonStyle('counter-button-minus-active')
    }

  return (
    <div className='counter-wrapper'>
        <button className={buttonStayle} onClick={()=>down(value)}> - </button>
        <p>{value}</p>
        <button className='counter-button-plus-active' onClick={()=>up(value)}> + </button>
    </div>
  )
}