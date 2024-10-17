import { DataSource } from 'typeorm';
import { Board } from './Board.postgres';

console.log('백엔드 프로그램을 실행합니다.');

console.log('여기서 API를 만들거에요');

console.log('여기서 DB에 접속하고, 테이블을 만들거에요');

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '34.64.38.113',
  port: 5014,
  username: 'postgres',
  password: 'postgres2022',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Board],
});

AppDataSource.initialize()
  .then(() => {
    console.log('db접속 성공. 동기화 시작');
  })
  .catch((error) => {
    console.log('db접속에 실패');
    console.log(error);
  });

// dbeaver는 db에 접속해서 잘 만들어져있는지 확인하는 도구일 뿐 db는 아님
