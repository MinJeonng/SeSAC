//등록
'use client';

import BoardsWrite from '@/components/09-06-boards-write-validation-refactoring';

export default function BoardNewPage() {
  return (
    <>
      <BoardsWrite isEdit={false} />
    </>
  );
}
