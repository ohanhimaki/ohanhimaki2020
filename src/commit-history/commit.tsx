import React from "react"
import { Commit } from "../shared/models/commit"
import timeAgo from "../helpers/date"

interface Props {
  commit: Commit
}

const SingleCommit = ({ commit }: Props) => {
  const date = new Date(commit.commit.author.date)
  const datediff = timeAgo(date)

  return (
    <a href={commit.html_url} target="_blank">
      <div className="flex bg-gray-900 border-gray-800 border-t-2">
        <img src={commit.committer.avatar_url} className="w-16 h-16"></img>{" "}
        <div className="ml-2">
          <h3 className=""> {commit.commit.message}</h3>
          <h4>
            {datediff.timeamount} {} {datediff.timeunit} {} ago
          </h4>
        </div>
      </div>
    </a>
  )
}

export default SingleCommit
