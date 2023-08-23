import { Cell } from "./cell.js";

export class Row {
    rowIndex:number;
    associatedCells:Cell[]=[];

    constructor(index:number) {
        this.rowIndex=index;
    }
}