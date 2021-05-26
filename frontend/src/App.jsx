import { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
// import { connect } from 'react-redux'

export class App extends Component {
  render() {
    return (
      <div className="main-container">
        <header>

        </header>
        
        <main>
          <Switch>
            {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
          </Switch>
        </main>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     loggedInUser: state.appModule.loggedInUser
//   }
// }

// export const App = connect(mapStateToProps)(_App)


