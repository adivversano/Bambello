import { Component } from "react";
// import { connect } from 'react-redux'
import { boardService } from '../services/board.service'

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
            <section className="toy-app full container">
                <h1>HELLO</h1>
                <pre>{JSON.stringify(board, null, 2)}</pre>
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