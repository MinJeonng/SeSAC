// 가짜로 만든 api를 여기에서 세팅

import { setupServer } from 'msw/node';
import { apis } from './apis';

export const server = setupServer(...apis);
