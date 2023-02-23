import { Entity, Column } from 'typeorm';

@Entity()
class User {
  @Column()
  id: number;
  @Column({ nullable: true })
  username: string;
  @Column()
  password: string;
  @Column()
  createdAt: Date;
  @Column()
  authStrategy: string;
}
