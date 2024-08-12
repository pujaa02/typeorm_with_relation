import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User.entity';
import { Menu } from './menu.entity';
import { Order } from './order.entity';

@Entity('order_product')
export class Order_Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn()
  user: User;

  @ManyToOne(() => Menu, (menu) => menu.id, { cascade: true })
  @JoinColumn()
  menu: Menu;

  @Column()
  total_item: number;

  @ManyToOne(() => Order, (order) => order.id, { cascade: true })
  @JoinColumn()
  order: Order;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
