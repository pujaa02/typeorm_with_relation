import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { User } from './User.entity';
import { Menu } from './menu.entity';

@Entity('cart')
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn()
  user: User;

  @OneToOne(() => Menu, (menu) => menu.id, { cascade: true })
  @JoinColumn()
  menu: Menu;

  @Column()
  count: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
