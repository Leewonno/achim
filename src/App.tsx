import Header from './navigation/Header'
import { Outlet } from 'react-router-dom'
import Footer from './navigation/Footer'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './index.css'
import ScrollToTop from './navigation/ScrollTop'

function App() {

  let persistor = persistStore(store);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ScrollToTop />
          <Header />
          <Outlet />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
