import React from "react"
import { Commit } from "../models/commit"

interface Props {
  commit: Commit
}

const SingleCommit = ({ commit }: Props) => {
  const date = new Date(commit.commit.author.date)
  const datetoday = new Date()
  const datedifference = date.getTime() - datetoday.getTime()
  const daysdifference = datedifference / (1000 * 3600 * 24)
  let hoursdifference = 0
  if (daysdifference < 1) {
    hoursdifference = datedifference / (1000 * 3600)
  }
  let strdaysdifference = Math.round(daysdifference * -1).toFixed(0)
  let strhoursdifference = Math.round(hoursdifference * -1).toFixed(0)
  let commitedago = ""

  if (daysdifference > -1) {
    commitedago = strhoursdifference + " hours ago"
  } else {
    commitedago = strdaysdifference + " days ago"
  }

  return (
    <a href={commit.html_url} target="_blank">
      <div className="flex bg-gray-900 border-gray-800 border-t-2">
        <img src={commit.committer.avatar_url} className="w-16 h-16"></img>{" "}
        <div className="ml-2">
          <h3 className=""> {commit.commit.message}</h3>
          <h4>{commitedago}</h4>
        </div>
      </div>
    </a>
  )
}

export default SingleCommit
