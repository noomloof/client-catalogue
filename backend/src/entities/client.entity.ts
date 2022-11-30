import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './user.entity';

@Entity()
export class Client {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column('')
  name: string;

  @Column('text', { array: true })
  emails: string[];

  @Column('text', { array: true })
  phones: string[];

  @ManyToOne(() => User, (user) => user.clients)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
