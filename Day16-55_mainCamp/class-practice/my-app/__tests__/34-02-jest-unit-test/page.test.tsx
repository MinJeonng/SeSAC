import JestUnitTestPage from '@/app/section34/34-02-jest-unit-test/page';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('UI test 중', () => {
  render(<JestUnitTestPage />);

  // screen에서 그림이 그려짐
  const mtText = screen.getByText('jestUI테스트 중입니다.');
  expect(mtText).toBeInTheDocument();

  const mtText2 = screen.getByText('예시 1 :');
  expect(mtText2).toBeInTheDocument();

  const mtText3 = screen.getByText('예시');
  expect(mtText3).toBeInTheDocument();
});
