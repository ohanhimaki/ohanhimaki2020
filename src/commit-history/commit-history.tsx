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
  const [listLength, setListLength] = useState(5)
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
  function showMoreOrLess(listLength: number) {
    if (listLength === 5) {
      setListLength(10)
    } else {
      setListLength(5)
    }
  }

  return (
    <div className={className}>
      {allCommits.slice(0, listLength).map((value: Commit, index: number) => {
        return <SingleCommit commit={value} key={index}></SingleCommit>
      })}
      <div
        className="flex flex-col bg-gray-900 border-gray-800 border-t-2 cursor-pointer "
        onClick={() => showMoreOrLess(listLength)}
      >
        <h3 className="m-auto ">
          {listLength === 5 ? "Show more" : "Show less"}
        </h3>
      </div>
    </div>
  )
}

export default Commithistory
