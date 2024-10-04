//등록
'use client';

import BoardsWrite from '@/components/09-05-boards-write-validation-container-presentational-ex/BoardsWriteContainer';

export default function BoardNewPage() {
  return (
    <>
      <BoardsWrite isEdit={false} />
    </>
  );
}
