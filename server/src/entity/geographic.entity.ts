import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Geographic {
   @PrimaryGeneratedColumn()
   id: number

   @Column()
   tambonID: string

   @Column()
   tambonThai: string

   @Column()
   tambonEng: string

   @Column()
   tambonThaiShort: string

   @Column()
   tambonEngShort: string

   @Column()
   postCodeMain: string

   @Column()
   postCodeAll: string

   @Column()
   districtID: string

   @Column()
   districtThai: string

   @Column()
   districtEng: string

   @Column()
   districtThaiShort: string

   @Column()
   districtEngShort: string

   @Column()
   provinceID: string

   @Column()
   provinceThai: string
   
   @Column()
   provinceEng: string
}