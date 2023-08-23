import { Cell } from "./cell.js";
import { Column } from "./column.js";
import { Grid } from "./grid.js";
import { Row } from "./row.js";
export declare class Sudoku {
    cells: Cell[];
    rows: Row[];
    columns: Column[];
    grids: Grid[];
    constructor();
    createCells: () => void;
    createColumn: () => void;
    createRows: () => void;
    createGrid: () => void;
    solve: () => Promise<void>;
    decode: (input: string) => Promise<void>;
    printSudoku: () => Promise<string>;
}
