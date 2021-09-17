import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '@app/entities/base.entity';
import { plainToClass } from 'class-transformer';
import { User } from '@app/entities/user.entity';
import {
  BID_PRIORITY,
  BID_STATUS,
  VARCHAR_DEFAULT_LENGTH,
} from '@app/constants';
import { Station, File, BidTodo } from '@app/entities';

@Entity({ name: 'bid' })
export class Bid extends BaseEntity {
  @Column({
    type: 'enum',
    enum: BID_STATUS,
    nullable: false,
    default: BID_STATUS.PENDING_IN_WORK,
  })
  status!: BID_STATUS;

  @Column({
    type: 'enum',
    enum: BID_PRIORITY,
    nullable: false,
    default: BID_PRIORITY.MEDIUM,
  })
  priority!: BID_PRIORITY;

  @Column({
    type: 'varchar',
    length: VARCHAR_DEFAULT_LENGTH,
    nullable: true,
  })
  description!: string | null;

  @Column({ nullable: false })
  stationId!: number;

  @ManyToOne(() => Station, (station) => station.bids)
  @JoinColumn({
    name: 'stationId',
    referencedColumnName: 'id',
  })
  station!: Station;

  @Column({ nullable: true })
  engineerId!: number | null;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'engineerId',
    referencedColumnName: 'id',
  })
  engineer!: User | null;

  @Column({ nullable: true })
  rejectedUserId!: number | null;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'rejectedUserId',
    referencedColumnName: 'id',
  })
  rejectedUser!: User | null;

  @Column({ nullable: true })
  confirmedStationWorkerId!: number | null;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'confirmedStationWorkerId',
    referencedColumnName: 'id',
  })
  confirmedStationWorker!: User | null;

  @Column({ nullable: true })
  finalPhotoId!: number | null;

  @OneToOne(() => File)
  @JoinColumn({
    name: 'finalPhotoId',
    referencedColumnName: 'id',
  })
  finalPhoto!: File | null;

  @OneToMany(() => BidTodo, (todo) => todo.bid)
  todos!: BidTodo[];

  @CreateDateColumn({ type: 'timestamptz', nullable: false })
  deadlineAt!: Date;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  startWorkAt!: Date | null;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  endWorkAt!: Date | null;

  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  confirmSuccessAt!: Date | null;

  constructor(data: Partial<Bid>) {
    super();
    Object.assign(this, plainToClass(Bid, data));
  }
}
