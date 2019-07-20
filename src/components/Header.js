import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export default class Header extends Component  {
    
    static contextType = ThemeContext
    
    render(){
        return (
        <AuthContext.Consumer>{(authContext) => (
            <ThemeContext.Consumer>{(themeContext) => {
                const { isAuthenticated, toggleAuth } = authContext
                const { isLight, lightProps, darkProps } = themeContext
                const theme = isLight ? lightProps : darkProps
                return (
                    <div className="header" style={{background: theme.ui, color: theme.text}}>
                        <h1>SAMPLE HOOKS CONTEXT APP</h1>
                        <div onClick={ toggleAuth }>
                            { isAuthenticated ? 'Logged in' : 'Logged out'}
                        </div>
                    </div>
                )
            }}</ThemeContext.Consumer>
        )}</AuthContext.Consumer>
        )
    }
}
