import axios from "axios"

const url = process.env.REACT_APP_URL_API
const key = process.env.REACT_APP_KEY_API

export const getCoins = async () => {
  try {
    const response = await axios.get(`${url}/coins`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': key,
      },
    })

    return response.data.data
  } catch (error) {
    console.log(error)
  }
}
