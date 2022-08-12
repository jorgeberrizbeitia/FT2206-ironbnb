import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

function AptList() {

  // 1. crear un estado donde almacenaremos la informacion
  const [listOfApts, setListOfApts] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  // 2. hacemos uso del useEffect (componentDidMount)
  useEffect(() => {
    getListOfApts()
  }, [])

  // 3. llamaremos a axios para que nos de la info y actualizamos el estado
  const getListOfApts = async () => {

    try {
      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response.data)
      setListOfApts(response.data)
      setIsFetching(false)
    } catch (error) {
      console.log(error)
    }


  }

  // 4. clausula para esperar recibir la informacion

  if (isFetching === true) {
    return <h2>... Loading</h2>
  }

  return (
    <div>
      
      {/* 5. renderizar la info */}
      {listOfApts.map((eachApt) => {
          return <p key={eachApt._id}>
            <Link to={`/pisos/${eachApt._id}/details`}>{eachApt.title}</Link>
          </p>
      })}

    </div>
  )
}

export default AptList