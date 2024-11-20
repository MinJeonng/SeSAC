import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Count from '@/app/section34/34-04-jest-unit-test-event/page';

it('버튼을 눌렀을때, 제대로 작동하는지 테스트하자.', () => {
  render(<Count />);
  fireEvent.click(screen.getByRole('count-button'));
  expect(screen.getByRole('count')).toHaveTextContent('1');
});
