const profile = async (profile, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_URL_API}/users/logout`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: {
        imgProfile: profile.imgProfile,
        imgHeader: profile.imgHeader,
        name: profile.name,
        description: profile.description,
        nameLink: profile.nameLink,
        level: profile.level,
      },
    },
  )

  const data = await response.json()

  if (response.status !== 200) {
    throw Error(data.message)
  }

  return data
}

export default profile
