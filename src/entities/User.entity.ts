import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Order_Product } from './order_product.entity';
import { Order } from './order.entity';
import { Rating } from './rating.entity';
import { Cart } from './cart.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  firstName: string;

  @Column()
  lastName?: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  gender: string;

  @Column()
  bd: Date;

  @Column()
  password?: string;

  @Column()
  accesskey?: string;

  @Column('int')
  role_id: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  street: string;

  @Column('int')
  pincode: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Order_Product, (order_product) => order_product.user)
  @JoinColumn()
  order_product: Order_Product[];

  @OneToMany(() => Order, (order) => order.user)
  @JoinColumn()
  order: Order[];

  @OneToMany(() => Rating, (rating) => rating.user)
  @JoinColumn()
  rating: Rating[];

  @OneToMany(() => Cart, (cart) => cart.user)
  @JoinColumn()
  cart: Cart[];
  message: string | object;
}
