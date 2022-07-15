import {Colors} from "../Colors";
import {Cell} from "../Cell";
import logo from '../../assets/black-king.png'
import {v1} from "uuid";

export enum FigureNames {
    FIGURE='фигура',
    KING='король',
    KNIGHT='конь',
    PAWN='пешка',
    QUEEN='королева',
    ROOK='ладья',
    BISHOP='слон'
}

export class Figure {
    color:Colors
    logo: typeof logo|null
    cell:Cell
    name:FigureNames
    id:string


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure=this
        this.logo=null
        this.name=FigureNames.FIGURE
        this.id=v1()
    }

    canMove(target:Cell):boolean{
       if (target.figure?.color===this.color){
           return false
       }
       if (target.figure?.name ===FigureNames.KING){
           return false
       }
        return true
    }
    moveFigure(target:Cell){}
}