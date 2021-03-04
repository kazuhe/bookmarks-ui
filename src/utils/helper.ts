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
