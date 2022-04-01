const register = async (first, last, username, email, password) => {
  const a = {
    first,
    last,
    username,
    email,
    password,
  }
  console.log(a)
  const response = await fetch(
    `${process.env.REACT_APP_URL_API}/users/register`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: {
          first: first,
          last: last,
        },
        username,
        email,
        password,
      }),
    },
  )
  const data = await response.json()
  if (response.status === 201) {
    return data
  } else {
    throw Error(data.message)
  }
}

export default register
