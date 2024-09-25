import { useState } from 'react';

interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; // 물음표 : 있어도 되고 없어도 되는 property
}

const TypescriptStateExample = () => {
  //타입 추론
  const [age, setAge] = useState(12);
  setAge('13');

  //타입 명시
  const [school, setSchool] = useState<string>('');

  //타입 명시를 해야하는 경우
  const [profile, setProfile] = useState<IProfile>({
    name: 'kim',
    age: 20,
    school: '서울대학교',
  });
  setProfile({
    name: 'park',
    age: '22살',
    school: '경기대학교',
  });

  return <></>;
};
