import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/styles'
import { TextField } from '@material-ui/core'
import superagent from 'superagent'
// import 'babel-polyfill'

const styles = theme => ({
    page: {
        height: '100vh'
    },
    tb: {
        width: '500px',
        height: '500px'
    }

})

class HomePage extends Component {

    handleChange = async (event) => {
        let result = event.target.value
        superagent
        .post('http://localhost:3000/api/auth/signin')
        .send({result})
        .then(data => console.log(data))
        .catch(data => console.log(data))
        
    }

    render() {
        const { classes } = this.props

        return (
            <Fragment>

                <TextField
                    id="standard-multiline-static"
                    label="Multiline"
                    multiline
                    rows="4"
                    defaultValue="Default Value"
                    className={classes.textField}
                    margin="normal"
                    className={classes.tb}
                    onChange={this.handleChange}
                />
            </Fragment>
        )
    }
}

export default withStyles(styles)(HomePage)