import axios from 'axios'
import { useEffect } from 'react'
import {useState} from 'react'
import {useParams} from "react-router-dom"

function AptDetails() {

  // params
  const { id } = useParams()
  console.log(id)
  // 1. estado
  const [aptDetails, setAptDetails] = useState(null)
  const [isFetching, setIsFetching] = useState(true)


  // 2. useEffect
  useEffect(() => {
    getAptDetails()
  }, [])

  // 3. function del axios
  const getAptDetails = async () => {

    try {
      const response = await axios.get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
      //3.1 buscar los params
      console.log(response.data)
      setAptDetails(response.data)
      setIsFetching(false)

    } catch (error) {
      console.log(error)
    }


  }

  // 4. fetching
  if (isFetching === true) {
    return <h2>... Loading</h2>
  }

  const {title, img, pricePerDay } = aptDetails

  return (
    <div>

      <h3>Detalles de piso</h3>

      {/* renderizar */}
      <div>
        <h4>{title}</h4>
        <img src={img} alt="piso" width={"300px"}/>
        <p>Precio: {pricePerDay}</p>
      </div>

    </div>
  )
}

export default AptDetails