import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Amphures {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   code: string;

   @Column({ name: "name_th" })
   nameTh: string;

   @Column({ name: "name_en" })
   nameEn: string;

   @Column({ name: "province_id" })
   provinceId: number;
}