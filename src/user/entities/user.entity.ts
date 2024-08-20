import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  
  @Column()
  refresh_token: string;

  @Column({ default: 1 })
  satus: number;

  @CreateDateColumn()
  createdAt: Date; 

  @CreateDateColumn()
  updatedAt: Date; 
}