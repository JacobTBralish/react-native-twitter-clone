import React, { Component } from "react";
import { Modal } from "react-native";
import { withNavigation } from "react-navigation";

class ModalComponent extends Component {
  render() {
    const { children } = this.props;
    const { routeName } = this.props.navigation.state;

    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { ...this.props })
    );

    // const Messages = withData()

    return (
      <Modal
        animationType="slide"
        visible={this.props.onToggle !== false}
        onRequestClose={this.props.onClose}
      >
        {routeName === "Messages" ? "" : childrenWithProps}
      </Modal>
    );
  }
}

export default withNavigation(ModalComponent);

// HOC
// const withData = (WrappedComponent, props) => <WrappedComponent props={props} />
