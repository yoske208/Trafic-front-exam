import './App.css'
// import CookieProvider from './Provider/CookieProvider'
import { AuthProvider } from './Provider/AuthProvider'
import Layout from './Layout/Layout'
import AppRouter from './Routers/AppRouter'

function App() {

  return (
    <>
    {/* <AuthProvider> */}
    {/* <CookieProvider> */}
    <Layout children={<AppRouter/>}/>
    {/* </CookieProvider> */}
    {/* </AuthProvider> */}
    </>
  )
}

export default App
