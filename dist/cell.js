"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
class Cell {
    constructor(index) {
        this.cellValue = 0;
        this.possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.findR = (CIndex) => {
            let rowIndex = Math.floor(CIndex / 9);
            let row = this.associatedSudoku.rows[rowIndex];
            return row;
        };
        this.findC = (CIndex) => {
            let columnIndex = Math.floor(CIndex % 9);
            let column = this.associatedSudoku.columns[columnIndex];
            return column;
        };
        this.findG = (CIndex) => {
            let gridIndex = Math.floor(CIndex / 27) * 3 + Math.floor((CIndex % 9) / 3);
            let grid = this.associatedSudoku.grids[gridIndex];
            return grid;
        };
        this.setCellValue = (cValue) => {
            this.cellValue = cValue;
            this.possibleValues = [];
            this.removePosibleValueFromRow(cValue);
            this.removePosibleValueFromColumn(cValue);
            this.removePosibleValueFromGrid(cValue);
        };
        this.removePosibleValueFromRow = (cValue) => {
            let row = this.associatedRow;
            let rowArray = row.associatedCells;
            for (let i = 0; i < rowArray.length; i++) {
                rowArray[i].removePossibleValue(cValue);
            }
        };
        this.removePosibleValueFromColumn = (cValue) => {
            let column = this.associatedColumn;
            let columnArray = column.associatedCells;
            for (let i = 0; i < columnArray.length; i++) {
                columnArray[i].removePossibleValue(cValue);
            }
        };
        this.removePosibleValueFromGrid = (cValue) => {
            let grid = this.associatedGrid;
            let gridArray = grid.associatedCells;
            for (let i = 0; i < gridArray.length; i++) {
                gridArray[i].removePossibleValue(cValue);
            }
        };
        this.removePossibleValue = (cValue) => {
            let i = this.possibleValues.indexOf(cValue);
            if (i != -1) {
                this.possibleValues.splice(i, 1);
            }
        };
        this.linkRCGtoCells = () => {
            let row = this.findR(this.cellIndex);
            row.associatedCells.push(this);
            this.associatedRow = row;
            let column = this.findC(this.cellIndex);
            column.associatedCells.push(this);
            this.associatedColumn = column;
            let grid = this.findG(this.cellIndex);
            grid.associatedCells.push(this);
            this.associatedGrid = grid;
        };
        this.cellIndex = index;
    }
}
exports.Cell = Cell;
