import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class Addtext extends Component {

    state = {
        text: ''
    }

    handleOnChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addtext(this.state);
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <div>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit} style={{ 'position': 'relative'}}>
                    <TextField id="text" label="Add Todo" style={ {width: '100%'} } onChange={this.handleOnChange} value={this.state.text}/>
                    <Fab color="primary" aria-label="add" onClick={this.handleSubmit} style={{
                        'position': 'absolute',
                        'rigt': '23%',
                        'top': '39%',
                        'left': '95%'
                    }}>
                        <AddIcon />
                    </Fab>
                </form>
            </div>
        )
    }
}
