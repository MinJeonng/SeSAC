//등록
'use client';

import BoardWrite from '@/components/09-04-boards-write-validation';

export default function BoardNewPage() {
  return (
    <>
      <BoardWrite isEdit={false} />
    </>
  );
}
