import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'

const styles = () => ({
    editor : {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
})

class JsCompiler extends Component {



    componentDidMount() {
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/monokai");
        editor.getSession().setMode("ace/mode/javascript");
    }

    render() {
        const {classes} = this.props
        return (
            <div id="editor" className={classes.editor}>function foo(items)
                var x = "All this is syntax highlighted";
                return x;
            </div>
        )
    }
} 

export default withStyles(styles)(JsCompiler)