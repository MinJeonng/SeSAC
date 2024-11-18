'use client';
import { UpdateBoardInput } from '@/commons/gql/graphql';
import * as z from 'zod';

export interface IMyUpdateType
  extends Pick<UpdateBoardInput, 'title' | 'contents'> {}

export const schema: z.ZodType<IMyUpdateType> = z.object({
  title: z.string().min(1, { message: '제목을 입력해주세요' }),
  contents: z.string().min(1, { message: '내용을 입력해주세요' }),
});
