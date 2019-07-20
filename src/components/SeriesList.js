import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default class SeriesList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLight, lightProps, darkProps } = this.context
        const theme = isLight ? lightProps : darkProps
        return (
            <div className="series-list" style={{background: theme.background, color: theme.text}}>
                <ul>
                    <li>How I met you mother</li>
                    <li>Game of Thrones</li>
                    <li>The Originals</li>
                    <li>Power</li>
                    <li>Hit the floor</li>
                </ul>
                <ThemeToggle />
            </div>
        )
    }
}
