//등록
'use client';

import BoardsWrite from '@/components/09-07-boards-write-validation-hooks-refactoring-ts';

export default function BoardNewPage() {
  return (
    <>
      <BoardsWrite isEdit={false} />
    </>
  );
}
