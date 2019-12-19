import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
 
@Entity()
export class Post extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  title: string;
 
  @Column()
  content: string;
}