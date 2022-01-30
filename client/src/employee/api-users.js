/*
{
      "firstName": "Asif",
      "lastName":"Mahmud", 
      "email": "asif@gmail.com"
}
*/
const create = async (user) => {
    try {
        let response = await fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  /*
  "users":[{
      "firstName": "Mushi",
      "lastName":"Hao", 
      "email": "mushi@gmail.com"
},
{
  "firstName": "Knap",
  "lastName":"Sack", 
  "email": "sack@gmail.com"
}]  
   */

const multiCreate = async (users) => {
    try {
        let response = await fetch('http://localhost:5000/api/users/multi-insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
  }

  const list = async () => {
    try {
      let response = await fetch('/api/users/', {
        method: 'GET'
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  const paginateList = async (pageNumber) => {
    try {
      let response = await fetch('http://localhost:5000/api/users/'+pageNumber, {
        method: 'GET'
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  export {
      create,
      multiCreate,
      list,
      paginateList
  }