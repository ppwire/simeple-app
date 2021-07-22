import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Districts {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ name: 'zip_code' })
   zipCode: number;

   @Column({ name: "name_th" })
   nameTh: string;

   @Column({ name: "name_en" })
   nameEn: string;

   @Column({ name: "amphure_id" })
   amphureId: number;
}