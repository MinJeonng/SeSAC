'use client';

import { Component } from 'react';

export default class ClassCounterPage extends Component {
  // 함수형에서는 writer, title 이렇게 따로다로 state를 생성했지만 클래스형은 state를 한데 모아두고 함
  state = {
    count: 1, //this.state.count 이렇게 접근함
  };

  onClickCountUp = () => {
    this.setState({
      // 내가 count를 바꿀건데  this.state.count + 1 같이 바꿀거야 라는 뜻
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리는 함수</button>
      </>
    );
  }
}
