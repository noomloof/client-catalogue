import { Exclude } from 'class-transformer';
import { v4 as uuid } from 'uuid';
import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class User {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column('')
  name: string;

  @Column('text', { array: true })
  emails: string[];

  @Column()
  @Exclude()
  password: string;

  @Column('text', { array: true })
  phones: string[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @OneToMany(() => Client, (client) => client.user)
  clients: Client[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
