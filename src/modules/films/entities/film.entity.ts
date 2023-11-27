import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('films')
export class Film {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  image_url: string;

  @Column()
  sinopse: string;

  @Column({ type: 'date' })
  release_date: Date;

  @Column({ type: 'float', nullable: false, default: 0 })
  stars: number;

  @Column({ type: 'varchar', length: 255 })
  trailer_url: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;
}
