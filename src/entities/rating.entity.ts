import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User.entity';
import { Menu } from './menu.entity';

@Entity('rating')
export class Rating {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  menu_id: number;

  @Column()
  content: string;

  @Column('decimal', { precision: 6, scale: 2 })
  rating: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Menu, (menu) => menu.id)
  @JoinColumn({ name: 'menu_id' })
  menu: Menu;
}
