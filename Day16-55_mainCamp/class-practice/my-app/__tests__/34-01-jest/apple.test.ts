import { Plus } from '@/app/section34/34-01-jest/apple';

it('plusFunc test', () => {
  const result = Plus(6, 7);
  expect(result).toBe(13);
});

// 이런식으로 여러개 한번에 해서 할 수 있음
// describe('나만의 테스트 그룹 만들기',()=>{
//   it('plus test',()=>{

//   })

//   it('minus test',()=>{

//   })
// })
