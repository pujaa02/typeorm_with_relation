import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Order_Product } from './order_product.entity';
import { User } from './User.entity';
import { Delivery } from './delivery.entity';
import { Notification } from './notification.entity';

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn()
  user: User;

  @Column()
  address: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Order_Product, (order_product) => order_product.order)
  @JoinColumn()
  order_product: Order_Product[];

  @OneToMany(() => Delivery, (delivery) => delivery.order)
  @JoinColumn()
  delivery: Delivery[];

  @OneToMany(() => Notification, (notification) => notification.order)
  @JoinColumn()
  notification: Notification[];
}
