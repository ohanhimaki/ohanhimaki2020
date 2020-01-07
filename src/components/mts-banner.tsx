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
  let readycss = "bg-gray-800 max-w-xl  m-auto p-8 rounded-lg my-4 "
  useEffect(() => {
    fetch("https://mita-tanaan-syotaisiin.herokuapp.com/api/lunchofday")
      .then(result => result.json())
      .then(data => {
        setRavintola(data[0].nimi)
        setLista(data[0].string_agg)
      })
  }, [])

  if (
    ravintola === "" ||
    lista === "" ||
    ravintola === null ||
    lista === null
  ) {
    readycss += "mts-hidden"
  } else {
    readycss += "mts-show"
  }

  return (
    <div className={readycss}>
      <h3>Päivän lounaspaikka</h3>
      <h2>{ravintola}</h2>
      <p dangerouslySetInnerHTML={{ __html: lista }}></p>
      <a href="https://mita-tanaan-syotaisiin.herokuapp.com/" target="_blank">
        <span className="text-gray-400 italic">
          Linkki toteuttamaani lounassovellukseen
        </span>
      </a>
    </div>
  )
}

export default MtsBanner
