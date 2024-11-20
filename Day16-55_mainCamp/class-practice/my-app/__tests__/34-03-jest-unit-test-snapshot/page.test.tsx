import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import JestUnitTestPage from '@/app/section34/34-03-jest-unit-test-snapshot/page';

it('기존 사진이랑 바뀐게 없는지 비교해보자 with snapshotTest', () => {
  const result = render(<JestUnitTestPage />);
  //기존 사진이랑 비교 이걸 실행하면 새로운 snapshot 폴더가 생겨서 사진 찍힌 것처럼 저장됌
  //34-02 파일처럼 일일히 다 쓰는게 아니라 스냅샷을 찍으면 훨씬 간딘힘
  expect(result.container).toMatchSnapshot();
});
