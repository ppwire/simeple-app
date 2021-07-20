import { Column, Timestamp } from "typeorm";

export class System {

   @Column({ type: "timestamp" })
   createdDate: Date;

   @Column({ type: "timestamp" })
   updatedDate: Date;

   @Column()
   isDeleted: Boolean;
}