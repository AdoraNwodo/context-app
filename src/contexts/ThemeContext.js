import React, { Component } from 'react'

export const ThemeContext = React.createContext()

export default class ThemeContextProvider extends Component {
    state = {
        isLight: true,
        lightProps: { background: '#ffffff', text: '#000000', ui: '#ffc0cb', lines: '#000000'},
        darkProps: { background: '#000000', text: '#ffffff', ui: '#c71585', lines: '#ffffff'}
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
