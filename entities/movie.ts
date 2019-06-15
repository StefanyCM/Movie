import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {genre} from "./genre";


@Entity("movie",{schema:"movie" } )
@Index("fk_movie_genre",["fkGenre",])
export class movie {

    @PrimaryGeneratedColumn({
        type:"int", 
        name:"id"
        })
    id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:100,
        name:"nombre"
        })
    nombre:string;
        

    @Column("varchar",{ 
        nullable:true,
        name:"url"
        })
    url:string | null;
        

    @Column("datetime",{ 
        nullable:false,
        name:"fecha_registro"
        })
    fecha_registro:Date;
        

   
    @ManyToOne(type=>genre, genre=>genre.movies,{ onDelete: 'CASCADE',onUpdate: 'CASCADE' })
    @JoinColumn({ name:'fk_genre'})
    fkGenre:genre | null;

}
