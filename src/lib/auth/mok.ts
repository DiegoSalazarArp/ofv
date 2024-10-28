

export async function login(username: string, password: string) {
  return await fetch("https://apisesiones.grupomok.com/api/getLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usr: username,
      pwd: password,
      sitiocod: 24,
    }),
  }).then(res => res.json())
}

export async function getSessions(id: string) {
  return await fetch(`https://apisesiones.grupomok.com/api/getSesiones?tkn=${id}`).then(res => res.json())
}