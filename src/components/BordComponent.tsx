import React, {FC, useEffect, useState} from 'react';
import '../App.css'
import {Board} from "../models/Board";
import {v1} from "uuid";
import {CellComponent} from "./CellComponent";
import {Cell} from "../models/Cell";


interface BoardProps {
    board: Board
    setBoard: (board: Board) => void

}

export const BordComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect(() => {
        highlightCells()
    }, [selectedCell])


    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    function click(cell: Cell) {
        if (cell.figure) {
            setSelectedCell(cell)
        }
    }


    return (
        <div className='board'>
            {board.cells.map(row =>
                <React.Fragment key={v1()}>
                    {row.map(cell =>

                        <CellComponent key={cell.id}
                                       cell={cell}
                                       click={click}
                                       selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}

                        />
                    )
                    }
                </React.Fragment>
            )
            }
        </div>
    );
};

