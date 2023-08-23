import { Cell } from "./cell.js";

export class Column {
    columnIndex:number;
    associatedCells: Cell[]=[];

    constructor(index:number) {
        this.columnIndex=index;
    }
}