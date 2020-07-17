import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('friend')
export class Friend {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userIdOne: number;

    @Column()
    userIdTwo: number;
}