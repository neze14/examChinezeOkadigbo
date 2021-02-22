import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventory {
    @PrimaryGeneratedColumn() 
    id: number;

    @Column() 
    productName: string;

    @Column() 
    target: string;

    @Column() 
    type: string;

    @Column() 
    sizesAvailable: string;

    @Column({nullable: true}) 
    coloursAvailable: string;

    @Column()
    photoUrl: string;

    @Column() 
    pricePerUnit: number;

    @Column({nullable: true}) 
    quantityAvailable: number;

}