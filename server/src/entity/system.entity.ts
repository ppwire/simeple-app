import { Column } from 'typeorm';

export class System {
  @Column({ type: 'timestamp' })
  createdDate: Date;

  @Column({ type: 'timestamp' })
  updatedDate: Date;

  @Column({ default: 0 })
  isDeleted: Boolean;
}
