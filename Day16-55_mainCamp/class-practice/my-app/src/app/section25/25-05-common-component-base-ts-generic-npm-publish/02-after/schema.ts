import { UpdateBoardInput } from '@/commons/gql/graphql';
import * as z from 'zod';

//1. 내가 만든 z.object로 타입 뽑아내기
type myschema = z.infer<typeof schema>;

//2-1. 이미 타입이 있는 경우, 이 타입을 적용하여 schema 만들기
interface IMySchema {
  writer: string;
  title: string;
  contents: string;
}

//2-2. 이미 있는 타입을 다운로드 받은 경우 => Omit으로도 사용가능!! 즉 쓰려는거 말고 나머지를 뺀다
// Omit을 사용할땐 주의, Pick이 안정성이 . 더좋음
export interface IMyUpdateType
  extends Pick<UpdateBoardInput, 'title' | 'contents'> {
  //hobby : string 도 추가가능
}

//여기 codegen으로 가져오는 타입에서 writer가 없어서 부득이하게 주석
export const schema: z.ZodType<IMyUpdateType> = z.object({
  // min(몇글자이상, 에러메시지)
  // optional :필수아닌값

  //writer: z.string().min(1, { message: '작성자를 입력해주세요' }),
  title: z.string().min(1, { message: '제목을 입력해주세요' }),
  contents: z.string().min(1, { message: '내용을 입력해주세요' }),

  /*
  // 아래는 이렇게 쓰면 된다.. 그런예시
  hobby: z.string().optional(),
  email: z.string().email('이메일 형식에 적합하지 않습니다.'),
  password: z
    .string()
    .min(4, { message: '비밀번호는 최소 4자리 이상 입력해주세요.' })
    .max(15, { message: '비밀번호는 최대 15자리로 입력해주세요.' }),
  // 정규표현식은 // 로 하고 그 사이안에 들어가고 첫 시작이 ^, 끝이 $ 임 그리고 숫자는 d이고 그 앞에 역슬래시(\)가 들어가고 {}안에 자릿수 적고, {,}콤마는 3자리 or 4자리라는 뜻
  phone: z.string().regex(/^\d{3}-\d{3,4}-\d{4}$/, {
    message: '전화번호 형식에 알맞지 않습니다.',
  }),

  */
});
