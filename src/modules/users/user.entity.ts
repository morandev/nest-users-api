import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/**
 *  por defecto al utilizar @Entity sin parametros este creara una tabla 
 *  con nombre igual al nombre de la clase en plural
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ type: "datetime", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;
  @Column()
  authStrategy: string;
}
