//1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (
  arg1: string,
  arg2: number,
  arg3: boolean
): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive('철수', 234, true);

//2. any 타입

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const result2 = getAny('철수', 234, true);

//3. unknown 타입

const getUnKnown = (
  arg1: unknown,
  arg2: unknown,
  arg3: unknown
): [unknown, unknown, unknown] => {
  if (typeof arg1 === 'number') console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const result3 = getUnKnown('철수', 234, true);

// 4. generic
// 철수가 들어간 순간 arg1은 string 타입이 되는 것! 그래서, 결과리턴부분에서 arg1은 string으로 확신할 수 있게 되는 것
// 이런 타입은 존재하지 않아서 타입이름은 지정하게 되는 것
const getGeneric = <myType1, myType2, myType3>(
  arg1: myType1,
  arg2: myType2,
  arg3: myType3
): [myType3, myType2, myType1] => {
  return [arg3, arg2, arg1];
};
const result4 = getGeneric('철수', 234, true);

//5. generic 짧게
const getGeneric2 = <T1, T2, T3>(
  arg1: T1,
  arg2: T2,
  arg3: T3
): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};
const result5 = getGeneric2('신짱구', 234, true);

//6. generic 더 짧게
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result6 = getGeneric3('신짱구', 234, true);

//7. generic -> 함수 선언식
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result7 = getGeneric4<string, number, boolean>('신짱구', 234, true);
