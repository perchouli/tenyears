import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Header, Home, About, Footer } from './front'

import '../css/main.scss'

// Global JSONP handle
window.jsonp = new Proxy({}, {
  get: (self, key) => {
    return (data) => { window[key] = data }
  }
})

const history = createBrowserHistory()

if (document.getElementById('app')) {
  ReactDOM.render((
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    </Provider>
  ), document.getElementById('app'))
}
