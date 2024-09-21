import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    nombre: string;

    @Column('text', { unique: true })
    correo_electronico: string;

    @Column('text', { nullable: true })
    telefono: string;

    @Column('text', { nullable: true })
    direccion: string;

    @Column('text')
    estado_cliente: string;
}
