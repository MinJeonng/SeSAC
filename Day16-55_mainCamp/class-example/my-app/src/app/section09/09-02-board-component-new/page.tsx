'use client';

import BoardWrite from '@/components/09-02-board-component-write';

export default function boardNewPage() {
  // props를 문자열보다는 boolean으로 넘겨주는 것이 더 좋다.
  return <BoardWrite isEdit={false} />;
}
