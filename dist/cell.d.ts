import { Column } from "./column.js";
import { Grid } from "./grid.js";
import { Row } from "./row.js";
import { Sudoku } from "./sudoku.js";
export declare class Cell {
    cellIndex: number;
    cellValue: number;
    associatedColumn: Column;
    associatedRow: Row;
    associatedGrid: Grid;
    associatedSudoku: Sudoku;
    possibleValues: number[];
    constructor(index: number);
    findR: (CIndex: number) => Row;
    findC: (CIndex: number) => Column;
    findG: (CIndex: number) => Grid;
    setCellValue: (cValue: number) => void;
    removePosibleValueFromRow: (cValue: number) => void;
    removePosibleValueFromColumn: (cValue: number) => void;
    removePosibleValueFromGrid: (cValue: number) => void;
    removePossibleValue: (cValue: number) => void;
    linkRCGtoCells: () => void;
}
