'use client';

import { IBoxProps } from '@/app/section13/13-04-props-children2-ts/types';

// 이렇게 타입을 안에서 정의하는 사람도 잇고, interface로 만드는 사람도 잇음
export default function Box({
  children,
  school,
}: {
  children: React.ReactNode;
  school: string;
}) {
  return (
    <>
      <div>+++과일 +++</div>
      <div>{school}</div>
      <div>{children}</div>
      <div>+++과일 +++</div>
    </>
  );
}
