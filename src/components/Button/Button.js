import React from 'react'
import './Button.scss'

export default props =>
<button 
        onClick={e => props.click && props.click(props.label)}
        className={`
                    ${props.operation ? 'operation' : ''}
                    ${props.double ? 'double' : ''}
                    ${props.triple ? 'triple' : ''}
                  `}>
    {props.label}
</button>