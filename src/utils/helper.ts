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

export function createUser(data: User): void {
  fetch(`http://localhost:8080/v1/users/`, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error(`HTTP error: ${response}`)
      } else {
        console.log('成功')
      }
    })
    .catch((error) => {
      console.error(error)
    })
}
