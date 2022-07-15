import React, {FC} from 'react';
import '../App.css'
import {Board} from "../models/Board";
import {v1} from "uuid";
import {CellComponent} from "./CellComponent";


interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
}

export const BordComponent: FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map(row =>
                <React.Fragment key={v1()}>
                    {row.map(cell =>
                        <React.Fragment key={cell.id}>
                            <CellComponent cell={cell}></CellComponent>
                        </React.Fragment>
                    )
                    }
                </React.Fragment>
            )
            }
        </div>
    );
};

