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
import { Order } from './order.entity';
import { Driver } from './driver.entity';

@Entity('notification')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Order, (order) => order.id, { cascade: true })
  @JoinColumn()
  order: Order;

  @OneToOne(() => Driver, (driver) => driver.id, { cascade: true })
  @JoinColumn()
  driver: Driver;

  @Column()
  message: string;

  @Column()
  isRead: boolean;

  @Column()
  isDeleted: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
