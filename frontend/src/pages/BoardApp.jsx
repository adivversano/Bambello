import { Component } from "react";
import { connect } from 'react-redux'
import { loadBoard } from '../store/actions/board.actions'

 class _BoardApp extends Component {

    state = {
        board: null
    }

    componentDidMount() {
        this.props.loadBoard();
    }

    render() {
        const { board } = this.props
        return (
            <section className="toy-app full container">
                <h1>HELLO</h1>
                <pre>{JSON.stringify(board, null, 2)}</pre>
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        board: state.boardModule.board
    }
}

const mapDispatchToProps = {
    loadBoard
}

export const BoardApp = connect(mapStateToProps, mapDispatchToProps)(_BoardApp)