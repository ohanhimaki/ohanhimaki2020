import React, { useState, useEffect } from "react"

// api url
// https://mita-tanaan-syotaisiin.herokuapp.com/api/lunchofday
interface lunch {
  nimi: string
  string_agg: string
}

const MtsBanner = () => {
  const [ravintola, setRavintola] = useState("")
  const [lista, setLista] = useState("")
  useEffect(() => {
    fetch("https://mita-tanaan-syotaisiin.herokuapp.com/api/lunchofday")
      .then(result => result.json())
      .then(data => {
        console.log(data)
        setRavintola(data[0].nimi)
        setLista(data[0].string_agg)
      })
  }, [])
  return (
    <>
      <h3>Päivän lounas</h3>
      <h3>{ravintola}</h3>
      <p>{lista}</p>
    </>
  )
}

export default MtsBanner
