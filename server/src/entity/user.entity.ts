import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Amphures } from "./amphures.entity";
import { Districts } from "./districts.entity";
import { Income } from "./income.entity";
import { Provinces } from "./provinces.entity";
import { System } from "./system.entity";

@Entity()
export class User extends System {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   userName: string;

   @Column()
   userPassword: string;

   @Column()
   profilePic: string;

   @Column()
   address: string;

   @Column()
   gender: string;

   @OneToOne(() => Income)
   @JoinColumn()
   income: Income

   @OneToOne(() => Provinces)
   @JoinColumn()
   provinces: Provinces

   @OneToOne(() => Amphures)
   @JoinColumn()
   amphures: Amphures

   @OneToOne(() => Districts)
   @JoinColumn()
   districts: Districts

}