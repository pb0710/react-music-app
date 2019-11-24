import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'common/globalStyle'
import { StoreContext } from 'redux-react-hook'
import store from 'Layout/store'
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