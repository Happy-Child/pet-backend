import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Expose } from 'class-transformer';
import { UserEntity } from './user.entity';
import { DistrictEntity } from '@app/entities/district.entity';

@Entity({ name: 'districts_leaders' })
export class DistrictLeaderEntity extends BaseEntity {
  @Column({ nullable: false, unique: true })
  @Expose()
  userId!: number;

  @OneToOne(() => UserEntity, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'id',
  })
  @Expose()
  user!: UserEntity;

  @Column({ nullable: true, unique: true })
  @Expose()
  leaderDistrictId!: number | null;

  @OneToOne(() => DistrictEntity)
  @JoinColumn({
    name: 'leaderDistrictId',
    referencedColumnName: 'id',
  })
  @Expose()
  district!: DistrictEntity;
}
