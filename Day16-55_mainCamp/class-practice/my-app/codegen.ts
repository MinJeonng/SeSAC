import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://main-practice.codebootcamp.co.kr/graphql',
  documents: ['src/**/*.tsx', 'src/**/*.ts'],
  generates: {
    './src/commons/gql/': {
      preset: 'client',
    },
  },
};
export default config;