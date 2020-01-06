import React, { useState, useEffect } from "react"
import { Commit } from "../models/commit"
import SingleCommit from "./commit"

//api.github.com/repos/ohanhimaki/ohanhimaki2020/commits

const Commithistory = () => {
  const [allCommits, setAllCommits] = useState([])
  //   const [lista, setLista] = useState("")
  useEffect(() => {
    fetch("https://api.github.com/repos/ohanhimaki/ohanhimaki2020/commits")
      .then(result => result.json())
      .then(data => {
        data = data.slice(0, 5)
        setAllCommits(data)
      })
  }, [])

  if (allCommits.length === 0 || allCommits === null) {
    return <></>
  }

  return (
<<<<<<< HEAD

    <div className=" child-rounded ">

=======
    <div className=" child-rounded ">
>>>>>>> develop
      {allCommits.map((value: Commit, index: any) => {
        return <SingleCommit commit={value} key={index}></SingleCommit>
      })}
    </div>
  )
}

export default Commithistory
