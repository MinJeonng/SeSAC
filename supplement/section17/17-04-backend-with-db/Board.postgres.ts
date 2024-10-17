import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
// db에 접속이 되어서 표 형태로 바뀌면 그게 db
export class Board {
  @PrimaryGeneratedColumn('increment')
  id!: number;
  @Column({ type: 'text' })
  writer!: string;
  @Column({ type: 'text' })
  title!: string;
  @Column({ type: 'text' })
  contents!: string;
}

// ! 는 무조건 있어야 해. ?는 있어도 되고 없어도 되고
