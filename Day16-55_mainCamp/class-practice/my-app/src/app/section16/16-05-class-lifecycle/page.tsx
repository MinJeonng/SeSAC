'use client';

import Link from 'next/link';
import { Component } from 'react';

export default class ClassCounterPage extends Component {
  // 함수형에서는 writer, title 이렇게 따로다로 state를 생성했지만 클래스형은 state를 한데 모아두고 함
  state = {
    count: 1, //this.state.count 이렇게 접근함
  };

  componentDidMount() {
    console.log('그려지고 나서 실행');
    //API 요청, 인풋 포커스 깜박깜박 등
  }
  componentDidUpdate() {
    console.log('변경되고 나서 실행');
  }
  componentWillUnmount() {
    console.log('사라지기 전에 실행');
    //예: 채팅방 나가기 API 요청, 불필요한 타이머 삭제 등 청소하기
  }

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
        <br />
        <Link href={'/'}>나가기</Link>
      </>
    );
  }
}
