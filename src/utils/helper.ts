import { User } from 'utils/types'

export function getUserByName(name: string): void {
  fetch(`http://localhost:8080/v1/users/${encodeURIComponent(name)}`, {
    method: 'GET',
  })
    .then((response) => {
      console.log(response.status)
      if (!response.ok) {
        throw new Error(`HTTP error: ${response}`)
      } else {
        return response.json().then((user) => {
          console.log(user)
          alert(`name: ${user.name}, email: ${user.email}`)
        })
      }
    })
    .catch((error) => {
      console.error(error)
    })
}

export async function createUser(data: User): Promise<void> {
  const response = await fetch(`http://localhost:8080/v1/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (response.ok) {
    console.log('response' + response)
    console.log('ok' + response.ok)
    console.log('status' + response.status)
    console.log('json' + response.json)
    console.log('url' + response.url)
    // const json = await response.json()
    // console.log(json)
  } else {
    console.log('response' + response)
    console.log('ok' + response.ok)
    console.log('status' + response.status)
    console.log('json' + response.json)
    console.log('url' + response.url)
  }
}
