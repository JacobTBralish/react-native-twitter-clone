import React, { Component, Fragment } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  fetchData = () => {
    axios.get(this.props.url).then(response => {
      this.setState({
        data: response.data
      });
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.data
          ? this.props.render(this.state.data)
          : this.fetchData()}
      </Fragment>
    );
  }
}
