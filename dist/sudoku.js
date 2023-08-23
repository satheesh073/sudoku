"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sudoku = void 0;
const cell_js_1 = require("./cell.js");
const column_js_1 = require("./column.js");
const grid_js_1 = require("./grid.js");
const row_js_1 = require("./row.js");
class Sudoku {
    constructor() {
        this.cells = [];
        this.rows = [];
        this.columns = [];
        this.grids = [];
        this.continueSolving = true;
        this.createCells = () => {
            for (let index = 0; index < 81; index++) {
                let c = new cell_js_1.Cell(index);
                c.associatedSudoku = this;
                this.cells[index] = c;
                this.cells[index].linkRCGtoCells();
            }
        };
        this.createColumn = () => {
            for (let index = 0; index < 9; index++) {
                this.columns[index] = new column_js_1.Column(index);
            }
        };
        this.createRows = () => {
            for (let index = 0; index < 9; index++) {
                this.rows[index] = new row_js_1.Row(index);
            }
        };
        this.createGrid = () => {
            for (let index = 0; index < 9; index++) {
                this.grids[index] = new grid_js_1.Grid(index);
            }
        };
        this.solve = () => {
            while (this.continueSolving) {
                this.internalsolving();
            }
        };
        this.internalsolving = () => {
            this.continueSolving = false;
            for (const element of this.cells) {
                let c = element;
                if (c.possibleValues.length == 1) {
                    c.setCellValue(c.possibleValues[0]);
                }
                if (c.cellValue == 0) {
                    this.continueSolving = true;
                }
            }
        };
        this.decode = (input) => __awaiter(this, void 0, void 0, function* () {
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
        });
        this.printSudoku = () => {
            let counter = 0;
            let input = `
    ---------------------------
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    ---------------------------
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    ---------------------------
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    || ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} | ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ${this.cells[counter++].cellValue} ||
    ---------------------------
    `;
            return input;
        };
        this.createColumn();
        this.createRows();
        this.createGrid();
        this.createCells();
    }
}
exports.Sudoku = Sudoku;
