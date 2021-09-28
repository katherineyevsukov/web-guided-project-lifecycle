import React from "react";

class AppClass extends React.Component {
  state = {
    name: "Allison",
    age: 33
  }

  componentDidMount() {
    console.log("AppClass: Component Mounts");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("AppClass: Component Updates");
    console.log("old props: ", prevProps);
    console.log("new props: ", this.props);
  }

  handleNameButtonClick = (e) => {
    console.log("-----------");
    console.log("AppFunc: Changes State");
    this.setState({
      ...this.state,
      name: "Chris"
    });
  };

  render() {
    console.log("AppFunc: Renders DOM");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;
