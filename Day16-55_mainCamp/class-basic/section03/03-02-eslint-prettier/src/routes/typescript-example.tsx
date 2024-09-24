const TypescriptExample = () => {
  //타입 추론
  // 내가 타입을 지정안해도 처음 들어온 걸 가지고 추론을 미리 해버림 let aaa: string 이렇게
  let aaa = '안녕하세요';
  aaa = 3; // 이렇게 되면 이미 얘는 aaa에 string으로 지정되어있기에 숫자를 넣을 수 없음

  //타입명시
  let bbb: string = 'hello';
  bbb = 10; //error

  //타임명시가 필요한 상황 , 타입이 두가지 이상을 가질 수 있는 경우
  let ccc: number | string = 1000;
  ccc = '1000원';

  //숫자 타입
  let ddd: number = 10;
  ddd = '10'; //error

  //boolean 타입
  let eee: boolean = true;
  eee = 'true'; //error -> true 임 , 빈 값이 아니니까 true로 작동함 -> 이런게 위험함

  //베열 타입
  let fff = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'dkss']; //let fff: (string | number)[] 지정안하면 알아서 이렇게 함

  //어떤 타입인지 모르겠을때는 일단 데이터를 넣어보고 어떤 타입인지 추론당해서 역으로 아는 방법 있음

  //객체타입

  // hobby는 있어도 되고 없어도 되게 하려면 아래와 같음

  const profile: IProfile = {
    name: 'kim',
    age: 30,
    school: '서초고등학교',
  };

  profile.name = '훈이';
  profile.age = '30';
  profile.hobby = 'male';

  //함수 타입
  //함수는 타입 추론이 불가 ! => 어디서 몇번이든 호출가능하므로 불가
  /*
  function 더하기함수(철수나이 : numeber):string{

  }
  -> (안에는 매개변수) : 이 부분은 리턴하면 나오는 값의 타입
  */

  function add(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
  }
  const result = add(10, 20, 'km'); // '30km', const result: string 이렇게 알아서 결과의 리턴 타입을 추론함
  add(true, false, '원'); //이렇게 함수는 여러번 호출할 수 있기에 타입 추론 불가!

  //화살표 함수 타입
  const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
  };
  const result2 = add2(10, 20, 'km');

  //any 타입 => 무엇이든 가능하다, 즉 이건 js랑 별반 다를게 없음
  //가급적 지양해야하는 타입
  let zzz: any = 10;
  zzz = 'hello';
  zzz = true;

  // 이 밑에는 내가 알아서 예시찾아보고 공부

  //void 타입
  function ggg(): void {
    console.log('hello');
  }

  //never 타입
  function hhh(): never {
    throw new Error('error');
  }

  //unknown 타입
  let iii: unknown = 10;
  iii = 'hello';
  iii = true;

  //null & undefined 타입
  let jjj: null | undefined = null;
  jjj = undefined;
  jjj = 'hello'; //error

  //never 타입
  function kkk(): never {
    while (true) {
      console.log('hello');
    }
  }
};
