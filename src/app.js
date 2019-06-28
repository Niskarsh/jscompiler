import 'babel-polyfill'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/home_page'


export default class extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
            </Switch>

        )
    }
}