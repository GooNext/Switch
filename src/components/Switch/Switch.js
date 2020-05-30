import React, {useState, useEffect} from 'react'
import './Switch.scss'

const Switch = props => {

    const { value } = props

    const[text, setText] = useState(
        {
          toggleText: true,
        },
      )

    const[width, setWidth] = useState(0)

    useEffect(() => {
        const widthSwitch = document.querySelectorAll('.Switch__part > p')
        widthSwitch.forEach((i) => {
            if(i.offsetWidth > width){
                setWidth(i.offsetWidth + 50)
            }
        })
    }, [width])
    
    const toggleSwitch = () => {
        setText({...text, toggleText : !text.toggleText})
    }


    return (
        <div className = 'Switch' onClick = {toggleSwitch}>
            <span className = {text.toggleText ? 'Switch__toggled' : 'Switch__nottoogled'}></span>

            <div className = 'Switch__part Switch__part-left' style = {{width: width}} >
                <p>{!value ? 'IS' : value.trueText}</p>
            </div>
            <div className = 'Switch__part Switch__part-right' style = {{width: width}}>
                <p>{!value ? 'IS NOT' : value.falseText}</p>
            </div>
        </div>
    )
}

export default Switch