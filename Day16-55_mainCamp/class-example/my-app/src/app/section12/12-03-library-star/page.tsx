'use client';
import React, { useState } from 'react';
import { Rate } from 'antd';

export default function LibraryStarPage() {
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

  const [value, setValue] = useState(0);

  // 일일히 만들어보자
  // 하고 onChange에다가 아래의 함수를 넣어보자
  // ===== 1단계 방식  : onChange는 Antd 개발자들이 만든 가짜 onChange이다. 여기에는 함수가 아니라 value가 들어간다. ===

  // const onChangeStar = (value : number) => {
  //   //let value = 5 와 같은 형식
  //    setValue(value);
  // }
  // return <Rate onChange={onChangeStar} value={value}/>

  // === 2단계 방식  : 간단하게 한줄로 정리가능 ======

  //const onChangeStar = (value) => setValue(value); //중괄호와 Return 사이에 아무것도 없으면 소괄호로 변경가능 => 특별한 의미없으면 소괄호 생략도 가능

  // return <Rate onChange={onChangeStar} value={value} />;

  //==== 3단게 방식 =====
  // return <Rate onChange={(value) => setValue(value)} value={value}/>

  // === 4단계 방식 ===== 받아서 오는거랑 보여주는거랑 동일하면 아래와 같이 정리할 수 있음
  return (
    // 실제로 onChange는 input 태그에서 변경되는 html의 onChange가 아니다!!!
    // (property) RateProps.onChange?: ((value: number) => void) | undefined)-> 이렇게 정의된다!! 즉, void는 리턴값이 없는거니까
    <Rate onChange={setValue} value={value} />
  );
  {
    /* tooltips={desc} */
  }
  {
    /* {value ? <span>{desc[value - 1]}</span> : null} */
  }
}
