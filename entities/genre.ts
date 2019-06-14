import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {pelicula} from "./pelicula";


@Entity("genre",{schema:"movie" } )
export class genre {

    @Column("int",{ 
        nullable:false,
        primary:true,
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"name"
        })
    name:string;
        

   
    @OneToMany(type=>pelicula, pelicula=>pelicula.fkGenre,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    peliculas:pelicula[];
    
}
