import { useCallback, useContext, useState } from 'react'
import Context from '../context/UserContext'
import loginServices from '../services/login'
import logoutServices from '../services/logout'
import registeServices from '../services/register'
import resetPassword, { validateReset } from '../services/resetPassword'

export default function useUser() {
  const { token, setToken } = useContext(Context)
  const [state, setState] = useState({
    loading: false,
    error: false,
    message: '',
  })

  const login = useCallback(
    (email, password) => {
      setState({ loading: true, error: false })
      loginServices({ email, password })
        .then(res => {
          setState({ loading: false, error: false, message: res })
          const { token } = res
          window.sessionStorage.setItem('token', token)
          setToken(token)
        })
        .catch(err => {
          window.sessionStorage.removeItem('token')
          setState({ loading: false, error: true, message: err.message })
        })
    },
    [setToken],
  )

  const logout = useCallback(() => {
    logoutServices(token)
      .then(res => {
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('option-active')
        setToken(null)
      })
      .catch(err => {
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('option-active')
        setState({ loading: false, error: true })
        console.error(err)
      })
  }, [setToken])

  const register = useCallback(
    (firstName, lastName, username, email, password) => {
      setState({ loading: true, error: false })
      registeServices(firstName, lastName, username, email, password)
        .then(res => {
          setState({
            loading: false,
            error: false,
            message: res,
            isComplete: true,
          })
          console.log(res)
        })
        .catch(err => {
          setState({
            loading: false,
            error: true,
            message: err.message,
            isComplete: false,
          })
        })
    },
    [],
  )

  const reset = useCallback(email => {
    setState({ loading: true, error: false })
    resetPassword(email)
      .then(res => {
        setState({
          loading: false,
          error: false,
          message: res,
          isComplete: true,
        })
      })
      .catch(err => {
        console.log(err)
        setState({
          loading: false,
          error: true,
          message: err.message,
          isComplete: false,
        })
      })
  }, [])

  const validateResetPassword = useCallback(
    (username, tokenReset, password) => {
      setState({ loading: true, error: false })
      validateReset(username, tokenReset, password)
        .then(res => {
          setState({
            loading: false,
            error: false,
            message: res,
            isComplete: true,
          })
        })
        .catch(err => {
          console.log(err)
          setState({
            loading: false,
            error: true,
            message: err.message,
            isComplete: false,
          })
        })
    },
  )

  return {
    isLogged: Boolean(token),
    isLoading: state.loading,
    hasError: state.error,
    resMessage: state.message,
    isComplete: state.isComplete,
    login,
    logout,
    register,
    reset,
    validateResetPassword,
  }
}
