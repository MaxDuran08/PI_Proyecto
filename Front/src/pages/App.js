import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { UserContextProvider } from '../context/UserContext'
import Page from './Page/Page'
import Login from './Login/Login'
import Register from './Register/Register'
import GlobalStyle from '../styles/globalStyles'
import Theme from '../styles/theme/ThemeDefault'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import FormResetPassword from './ForgotPassword/FormResetPassword/FormResetPassword'
function App() {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <UserContextProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/reset/password" exact component={ForgotPassword} />
              <Route
                path="/reset/password/form/:username/:token"
                component={FormResetPassword}
              />
              <Route path="/" component={Page} />
            </Switch>
          </BrowserRouter>
        </UserContextProvider>
      </Theme>
    </>
  )
}

export default App
