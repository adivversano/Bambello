// import { Home } from './pages/Home.jsx'
import { BoardApp } from './pages/BoardApp.jsx'
import { CardDetails } from './pages/CardDetails'


export const routes = [
    {
        path: '/',
        component: BoardApp,
    },
    {
        path: '/card/:cardId',
        component: CardDetails
    }
]