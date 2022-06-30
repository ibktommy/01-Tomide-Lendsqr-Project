import { useEffect, useState } from 'react'
import users from './usersData.json'
import paginate from './utils'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  // Fetch data
  const fetchData = () => {
    setLoading(true)

    if (users) {
      setLoading(false)

      const userData = users;

      setData(paginate(userData))
    } else {
      setLoading(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // console.log(data)

  return { loading, data }
}