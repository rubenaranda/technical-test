import axios from 'axios'
import { useState, useEffect } from 'react'

const GetApiData = (baseURL) => {
  const [post, setPost] = useState(null)

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
    })
  }, [baseURL])

  return post
}

export default GetApiData
