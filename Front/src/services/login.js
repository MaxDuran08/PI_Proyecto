export default function login({ email, password }) {
  return fetch(`${process.env.REACT_APP_URL_API}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(res => {
      if (!res.ok) throw Error('No se encontro el usuario')
      return res.json()
    })
    .then(res => {
      console.log(res)
      const data = {
        token: res.token,
      }
      return data
    })
}
