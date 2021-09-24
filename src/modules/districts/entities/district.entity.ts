import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '@app/entities/base.entity';
import { VARCHAR_DEFAULT_LENGTH } from '@app/constants';
import { Expose } from 'class-transformer';
import { Region } from '../../regions';
import { UserEntity } from '@app/entities';

@Entity({ name: 'district' })
export class District extends BaseEntity {
  @Column({
    type: 'varchar',
    length: VARCHAR_DEFAULT_LENGTH,
    nullable: false,
    unique: true,
  })
  @Expose()
  name!: string;

  @Column({
    type: 'varchar',
    length: VARCHAR_DEFAULT_LENGTH,
    nullable: false,
    unique: true,
  })
  @Expose()
  slug!: string;

  @Column({ nullable: false })
  @Expose()
  regionSlug!: string;

  @ManyToOne(() => Region)
  @JoinColumn({
    name: 'regionSlug',
    referencedColumnName: 'slug',
  })
  @Expose()
  region!: Region;

  @Column({ nullable: true })
  districtLeaderId!: number | null;

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'districtLeaderId',
    referencedColumnName: 'id',
  })
  @Expose()
  districtLeader!: UserEntity | null;
}