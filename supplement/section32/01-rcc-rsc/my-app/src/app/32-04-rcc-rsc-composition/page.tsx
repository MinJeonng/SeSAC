//페이지는 즉 부모는 rsc로 시작하자 안그러면 하위 모두 rcc 되기떄문이다.

import Rcc from '../components/32-04-rcc-rsc-composition/01-rcc';
import Rsc from '../components/32-04-rcc-rsc-composition/02-rsc';

export default function RccRscCompositionitemPage() {
  console.log('서버 페이지가 렌더링 되었습니다.');
  return (
    <>
      <div>저는 페이ㅣ지 컴포넌트</div>
      <Rcc>
        <Rsc />
      </Rcc>
    </>
  );
}
