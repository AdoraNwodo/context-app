import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

export default class Header extends Component  {
    
    static contextType = ThemeContext
    
    render(){
        const { isLight, lightProps, darkProps } = this.context
        const theme = isLight ? lightProps : darkProps
        return (
            <div className="header" style={{background: theme.ui, color: theme.text}}>
                <h1>SAMPLE HOOKS CONTEXT APP</h1>
            </div>
        )
    }
}
