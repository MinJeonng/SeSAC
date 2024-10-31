interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

///// 여기서 쓰이는 타입들은 한번 타입을 정의해두고 또 추가적으로 변경할 필요없이 바로바로 필요한 것만 쓸 수 있게끔 하는 것!

//1. Partial 타입
type aaa = Partial<IProfile>; //partial은 타입을 모두 물음표로 바꿔주는 역할

//2. Required 타입
type bbb = Required<IProfile>; //required는 타입을 모두 필수로 바꿔주는 역할 -> 이로인해서 hobby의 ?를 없애줌

//3. Pick 타입
type ccc = Pick<IProfile, 'name' | 'age'>; //Pick은 IProfile에서 'name'과 'age'만 선택하겠다!! 그것만 쓰겠다!

//4. Omit 타입
type ddd = Omit<IProfile, 'school'>; // school만 빼겠다.

//5. Record 타입
type eee = '짱구' | '짱아' | '유리'; // Union 타입, 타입을 좁혀들어간다. 즉 eee는 짱구 or 짱아 or 유리 타입!!!
const child1: eee = '지지'; //'"지지"' 형식은 'eee' 형식에 할당할 수 없습니다. -> 이렇게 에러가 뜸 , 즉 eee 타입을 쓰고싶으면 그 안에 값들만 사용 가능

type fff = Record<eee, number>; //eee가 key고 number가 value 인 객체를 생성
type ttt = Record<eee, IProfile>; // 밑에처럼 key, value 형태로 값이 저장
/*
type fff = {
    짱구: IProfile;
    짱아: IProfile;
    유리: IProfile;
}
*/

// 6. 객체의 Key들로 Union 타입 만들기
type ggg = keyof IProfile; // iprofile의 key만 뽑음 // 'name'| 'age'| 'school'| 'hobby' 와 같음
const myProfile: ggg = 'hobby';

// 7. type vs interface 차이

// 선언 병합 가능!!
interface IProfile {
  candy: number;
}

// type은 추가 되는 것!!
const qqq: IProfile = {
  name: '라라',
  candy: 100,
};

//8. 응용
const profile: Partial<IProfile> = {
  // 수정하고 이런데에 쓰기 좋음. 쓰고싶은 것만 쓰면 되니까!!!
  age: 40,
};
