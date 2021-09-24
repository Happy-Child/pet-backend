import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { BaseEntity, UserEntity, Station, File } from '@app/entities';
import { BidTodo } from './bid-todo.entity';
import { VARCHAR_DEFAULT_LENGTH } from '@app/constants';
import { BID_PRIORITY, BID_STATUS } from '../constants';

@Entity({ name: 'bid' })
export class Bid extends BaseEntity {
  @Column({
    type: 'enum',
    enum: BID_STATUS,
    nullable: false,
    default: BID_STATUS.PENDING_IN_WORK,
  })
  @Expose()
  status!: BID_STATUS;

  @Column({
    type: 'enum',
    enum: BID_PRIORITY,
    nullable: false,
    default: BID_PRIORITY.MEDIUM,
  })
  @Expose()
  priority!: BID_PRIORITY;

  @Column({
    type: 'varchar',
    length: VARCHAR_DEFAULT_LENGTH,
    nullable: true,
  })
  @Expose()
  description!: string | null;

  @Column({ nullable: false })
  stationId!: number;

  @ManyToOne(() => Station, (station) => station.bids)
  @JoinColumn({
    name: 'stationId',
    referencedColumnName: 'id',
  })
  @Expose()
  station!: Station;

  @Column({ nullable: true })
  engineerId!: number | null;

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: 'engineerId',
    referencedColumnName: 'id',
  })
  @Expose()
  engineer!: UserEntity | null;

  @Column({ nullable: true })
  rejectedUserId!: number | null;

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: 'rejectedUserId',
    referencedColumnName: 'id',
  })
  @Expose()
  rejectedUser!: UserEntity | null;

  @Column({ nullable: true })
  confirmedStationWorkerId!: number | null;

  @ManyToOne(() => UserEntity)
  @JoinColumn({
    name: 'confirmedStationWorkerId',
    referencedColumnName: 'id',
  })
  @Expose()
  confirmedStationWorker!: UserEntity | null;

  @Column({ nullable: true })
  finalPhotoId!: number | null;

  @OneToOne(() => File)
  @JoinColumn({
    name: 'finalPhotoId',
    referencedColumnName: 'id',
  })
  @Expose()
  finalPhoto!: File | null;

  @OneToMany(() => BidTodo, (todo) => todo.bid)
  @Expose()
  todos!: BidTodo[];

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  @Expose()
  deadlineAt!: Date;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  @Expose()
  startWorkAt!: Date | null;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  @Expose()
  endWorkAt!: Date | null;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  @Expose()
  confirmSuccessAt!: Date | null;
}