import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import {movie} from "./movie";


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
        

   
    @OneToMany(type=>movie, movie=>movie.fkGenre,{ onDelete: 'CASCADE' ,onUpdate: 'CASCADE' })
    movies:movie[];
    
}
