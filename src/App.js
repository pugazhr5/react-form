import { Provider } from 'react-redux'

// Custom components & helpers
import Header from './components/Header'
import Form from './components/form/Form'
import Footer from './components/Footer'
import store from './redux/store'
import './app.css'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Form />
      <Footer />
    </Provider>
  )
}

export default App
