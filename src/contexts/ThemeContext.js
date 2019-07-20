import React, { Component } from 'react'

export const ThemeContext = React.createContext()

export default class ThemeContextProvider extends Component {
    state = {
        isLight: true,
        lightProps: { background: '#f5f5f5', text: '#000000', ui: '#ffc0cb', lines: '#000000'},
        isDark: false,
        darkProps: { background: '#000000', text: '#ffffff', ui: '#ffc0cb', lines: '#ffffff'},
        isMonochrome: false,
        monochromeProps: { background: '#ffffff', text: '#000000', ui: '#ffffff', lines: '#000000'},
    }
    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
