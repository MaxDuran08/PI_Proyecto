export default function logout(token) {
  return fetch(`${process.env.REACT_APP_URL_API}/users/logout`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  })
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(res => {
      console.log(res)
      return res
    })
}
