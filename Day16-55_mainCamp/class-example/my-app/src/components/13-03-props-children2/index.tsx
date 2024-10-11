'use client';
export default function Box({ children, school }) {
  return (
    <>
      <div>+++과일 +++</div>
      <div>{school}</div>
      <div>{children}</div>
      <div>+++과일 +++</div>
    </>
  );
}
