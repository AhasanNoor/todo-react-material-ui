import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Content from './Content';
import Addtext from './Addtext';

export default class App extends Component {

  state = {
    contents: [

    ]
  }

  addtext = (content) => {
    content.id = Math.random();
    let contents = [...this.state.contents, content];
    this.setState({
      contents: contents
    })
  }

  deletetext = (id) => {
    //console.log(id);
    let contents = this.state.contents.filter(content => {
      return content.id !== id;
    })
    this.setState({
      contents: contents
    })
  }

  render() {
    return (
      <div>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs>
            </Grid>
            <Grid item xs={12} md={6}>
              <h1 style={{borderBottom: "1px solid", display: "flex", justifyContent:"center", margin: "70px 200px"}}>Todo</h1>
              <Addtext addtext={this.addtext}/>
              <Content contents={this.state.contents} deletetext={this.deletetext}/>
            </Grid>
            <Grid item xs>
            </Grid>
          </Grid>
        </Container>
      </div>
    )
  }
}
