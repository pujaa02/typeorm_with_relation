import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User.entity';
import { Delivery } from './delivery.entity';
import { Notification } from './notification.entity';

@Entity('driver')
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  @OneToMany(() => Delivery, (delivery) => delivery.driver)
  @JoinColumn()
  delivery: Delivery[];

  @OneToMany(() => Notification, (notification) => notification.driver)
  @JoinColumn()
  notification: Notification[];
}
