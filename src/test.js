import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0,
    };
  }
  handleClick = () => {
    // console.log('-- start --')
    // Promise.resolve().then(() =>  console.log('promise then'))
    // this.setState({
    //     val: this.state.val + 1
    // }, () => {
    //     console.log('state...', this.state)
    // })
    // console.log('--- end ---')
  };
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>test</h1>
        <p id="pt">1111</p>
      </div>
    );
  }
}
