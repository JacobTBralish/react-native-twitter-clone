import React, { Fragment } from "react";
import Axios from "axios";

function HOC(Component, url) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    getData = () => {
      Axios.get(url).then(response => {
        this.setState({ data: response.data });
      });
    };

    render() {
      return (
        <Fragment>
          {this.state.data ? (
            <Component {...this.props} data={this.state.data} />
          ) : (
            this.getData()
          )}
        </Fragment>
      );
    }
  };
}

export default HOC;
