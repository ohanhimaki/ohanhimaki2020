import React, { useState, useEffect } from "react"
import { Commit } from "../shared/models/commit"
import SingleCommit from "./commit"

//api.github.com/repos/ohanhimaki/ohanhimaki2020/commits

interface Props {
  repo: string
  className: string
}

const Commithistory = ({ repo, className }: Props) => {
  const [allCommits, setAllCommits] = useState([])
  //   const [lista, setLista] = useState("")
  useEffect(() => {
    fetch("https://api.github.com/repos/" + repo + "/commits")
      .then(result => result.json())
      .then(data => {
        if (data.length > 0) {
          data = data.slice(0, 10)
          setAllCommits(data)
        }
      })
  }, [])

  if (allCommits.length === 0 || allCommits === null) {
    return <></>
  }

  return (
    <div className={className}>
      {allCommits.map((value: Commit, index: any) => {
        return <SingleCommit commit={value} key={index}></SingleCommit>
      })}
    </div>
  )
}

export default Commithistory