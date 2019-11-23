import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook'
import { BrowserRouter } from 'react-router-dom'
import store from 'Layout/store'
import {GlobalStyle} from 'common/globalStyle'
import Layout from 'Layout'

const App = () => (
	<StoreContext.Provider value={store}>
		<BrowserRouter>
			<GlobalStyle />
			<Layout/>
		</BrowserRouter>
	</StoreContext.Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'))