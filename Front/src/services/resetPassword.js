const resetPassword = async email => {
  console.log(email)
  const response = await fetch(`${process.env.REACT_APP_URL_API}/users/reset`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  const data = await response.json()

  switch (response.status) {
    case 302:
      throw new Error(data.message)
    case 500:
      throw new Error(data.message)
  }
  return data
}

export const validateReset = async (username, token, password) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL_API}/users/reset/validate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, token, password }),
    },
  )

  const data = await response.json()

  console.log(response)
  console.log(data)
}

export default resetPassword
