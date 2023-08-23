import { Column } from "./column.js";
import { Grid } from "./grid.js";
import { Row } from "./row.js";
import { Sudoku } from "./sudoku.js";

export class Cell {
    cellIndex:number;
    cellValue:number=0;
    associatedColumn:Column;
    associatedRow:Row;
    associatedGrid:Grid;
    associatedSudoku:Sudoku ;
    possibleValues=[1,2,3,4,5,6,7,8,9];

    constructor(index:number) {
        this.cellIndex=index;  
        
    }
   
    findR=(CIndex:number)=>{
        let rowIndex=Math.floor(CIndex/9);
        let row=this.associatedSudoku.rows[rowIndex];
        return row;
    }
    findC=(CIndex:number)=>{
        let columnIndex=Math.floor(CIndex%9);
        let column=this.associatedSudoku.columns[columnIndex];
        return column;
    }
    findG=(CIndex:number)=>{
        let gridIndex=Math.floor(CIndex / 27) * 3 + Math.floor((CIndex % 9) / 3);
        let grid=this.associatedSudoku.grids[gridIndex];
        return grid;
    }
    setCellValue=(cValue:number)=>{
        this.cellValue=cValue;
        this.possibleValues=[];
        this.removePosibleValueFromRow(cValue);
        this.removePosibleValueFromColumn(cValue);
        this.removePosibleValueFromGrid(cValue);
    }
    removePosibleValueFromRow=(cValue:number)=>{
        let row=this.associatedRow;
        let rowArray=row.associatedCells;
        for (let i= 0; i< rowArray.length; i++) {
            rowArray[i].removePossibleValue(cValue);            
        }
    }
    removePosibleValueFromColumn=(cValue:number)=>{
        let column=this.associatedColumn;
        let columnArray=column.associatedCells;
        for (let i= 0; i< columnArray.length; i++) {
            columnArray[i].removePossibleValue(cValue);            
        }
    }
    removePosibleValueFromGrid=(cValue:number)=>{
        let grid=this.associatedGrid;
        let gridArray=grid.associatedCells;
        for (let i= 0; i< gridArray.length; i++) {
            gridArray[i].removePossibleValue(cValue);            
        }
    }
    removePossibleValue=(cValue:number)=>{
        let i=this.possibleValues.indexOf(cValue);
        if(i!=-1)
        {
            this.possibleValues.splice(i,1);
        }
    }
    linkRCGtoCells=()=>{
        let row=this.findR(this.cellIndex);
        row.associatedCells.push(this);
        this.associatedRow=row;
       

        let column=this.findC(this.cellIndex);
        column.associatedCells.push(this);
        this.associatedColumn=column;

        let grid=this.findG(this.cellIndex);
        grid.associatedCells.push(this);
        this.associatedGrid=grid;
    }
}