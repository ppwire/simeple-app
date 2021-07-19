import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class System {
   @Column()
   createBy: string;

   @CreateDateColumn()
   createDate: Date;

   @Column()
   updateBy: string;

   @UpdateDateColumn()
   updateDate: Date;
}