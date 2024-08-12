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
import { Order } from './order.entity';
import { Driver } from './driver.entity';

@Entity('delivery')
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order, (order) => order.id, { cascade: true })
  @JoinColumn()
  order: Order;

  @ManyToOne(() => Driver, (driver) => driver.id, { cascade: true })
  @JoinColumn()
  driver: Driver;

  @Column()
  delivery_status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
