import {Colors} from "../Colors";
import {Cell} from "../Cell";
import logo from '../../assets/black-king.png'

export enum FigureNames {

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
    }
}