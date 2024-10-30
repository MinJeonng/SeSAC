//1. HOF- 함수선언식
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
// 이렇게 들어가야 first안에 있는 함수까지
const result = first('영희')(8);

//2. HOF- 화살표함수
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

// 이렇게 들어가야 first안에 있는 함수까지
const result2 = first2('영희')(8);

//3. HOC- 화살표함수
// C에선 JSX.Element 형태여야 한다.
// prettier-ignore
const withLoginCheck = <C>(component: C) => <P>(props: P): [C, P] => {
  return [component, props];
};

const result3 = withLoginCheck('영희')(8);
