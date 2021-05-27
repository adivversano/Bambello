import { Component } from "react";
// import { connect } from 'react-redux'
import { boardService } from '../services/board.service'
import { BoardList } from '../cmps/BoardList'
import { BoardListAdd } from '../cmps/BoardListAdd'

export class BoardApp extends Component {

    state = {
        board: null
    }

    componentDidMount() {
        this.loadBoard();
    }

    loadBoard = async () => {
        const board = await boardService.query();
        console.log(board)
        this.setState({ board })
    }

    render() {
        const { board } = this.state;

        if (!board) return ''

        return (
            <section className="board-app">

                <div className="board-list-container">
                    {board.lists.map(list => <BoardList key={list.id} list={list} />)}
                </div>
                <BoardListAdd />
                {/* <pre>{JSON.stringify(board, null, 2)}</pre> */}
            </section>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//     }
// }

// const mapDispatchToProps = {
// }

// export const BoardApp = connect(mapStateToProps, mapDispatchToProps)(_BoardApp)