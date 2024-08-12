import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Restaurant } from './restaurant.entity';
import { Order_Product } from './order_product.entity';
import { Rating } from './rating.entity';
import { Cart } from './cart.entity';

@Entity('menu')
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.id, { cascade: true })
  @JoinColumn()
  restaurant: Restaurant;

  @Column()
  item_name: string;

  @Column('text')
  description: string;

  @Column()
  price: number;

  @Column()
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Order_Product, (order_product) => order_product.menu)
  @JoinColumn()
  order_product: Order_Product[];

  @OneToMany(() => Rating, (rating) => rating.menu)
  @JoinColumn()
  rating: Rating[];

  @OneToMany(() => Cart, (cart) => cart.menu)
  @JoinColumn()
  cart: Cart[];
}
