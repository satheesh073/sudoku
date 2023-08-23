import { Cell } from "./cell.js";
import { Column } from "./column.js";
import { Grid } from "./grid.js";
import { Row } from "./row.js";

 export class Sudoku {
    cells:Cell[]=[];
    rows:Row[]=[];
    columns:Column[]=[];
    grids:Grid[]=[];
    continueSolving:boolean=true;


    constructor() {
        
        this.createColumn();
        this.createRows();
        this.createGrid();

        this.createCells();
    }
    createCells=()=>{
        for (let index = 0; index < 81; index++) {
            let c =new Cell(index);
             c.associatedSudoku=this;
            this.cells[index]=c;
            this.cells[index].linkRCGtoCells()
            
        }
    }
    createColumn=()=>{
        for (let index = 0; index < 9; index++) {
            this.columns[index]=new Column(index);
        }
    }
    createRows=()=>{
        for (let index = 0; index < 9; index++) {
            this.rows[index]=new Row(index);
        }
    }
    createGrid=()=>{
        for (let index = 0; index < 9; index++) {
            this.grids[index] = new Grid(index);  
        }
    }
    solve=()=>
    {
      while (this.continueSolving) {
        this.internalsolving();
      }
      
    } 
    internalsolving=()=>{
      this.continueSolving=false;
      for (const element of this.cells) {
        let c=element;
        if(c.possibleValues.length==1)
        {
          c.setCellValue(c.possibleValues[0])
        }
        if(c.cellValue==0)
        {
          this.continueSolving=true;
        }
        
      }

    }
    decode = async (input: string) => {
        let cIndex = 0;
        for (let index = 0; index < input.length; index++) {
          let inCharacter = input.substring(index, index + 1);
          if (!isNaN(parseInt(inCharacter))) {
            let cellObj = this.cells[cIndex++];
            if (parseInt(inCharacter) != 0) {
              cellObj.setCellValue(parseInt(inCharacter));
            }
          }
        }
      }

    printSudoku = () => {
        let counter = 0;
        let input = `
    ---------------------------
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    ---------------------------
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    ---------------------------
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${
          this.cells[counter++].cellValue
        } ||
    ---------------------------
    `;
        return input;
      };
    }

    

   
