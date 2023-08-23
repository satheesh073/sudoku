import { Cell } from "./cell.js";

export class Grid {
    gridIndex:number;
    associatedCells:Cell[]=[];

    constructor(index:number){
        this.gridIndex=index;
    }
    
}