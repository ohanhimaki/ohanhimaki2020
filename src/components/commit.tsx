import React from "react"
import { Commit } from "../models/commit"

interface Props {
  commit: Commit
}

const SingleCommit = ({ commit }: Props) => {
<<<<<<< HEAD

=======
>>>>>>> develop
  function timeAgo(params: Date) {
    let timeunit = ""
    let timeamount = 0
    const dateNow = new Date()
    const msdiff = dateNow.getTime() - params.getTime()
    const datediff = msdiff / (1000 * 3600 * 24)
    if (datediff > 1) {
      timeamount = datediff
      timeunit = "days"
    } else if (datediff * 24 > 0) {
      timeamount = datediff * 24
      timeunit = "hours"
    } else {
      timeamount = datediff * 24 * 3600
      timeunit = "minutes"
    }
    const timeamountstr = Math.round(timeamount).toFixed(0)
    return { timeamount: timeamountstr, timeunit: timeunit }
  }

  const date = new Date(commit.commit.author.date)
  const datediff = timeAgo(date)

<<<<<<< HEAD

=======
>>>>>>> develop
  return (
    <a href={commit.html_url} target="_blank">
      <div className="flex bg-gray-900 border-gray-800 border-t-2">
        <img src={commit.committer.avatar_url} className="w-16 h-16"></img>{" "}
        <div className="ml-2">
          <h3 className=""> {commit.commit.message}</h3>
<<<<<<< HEAD

          <h4>
            {datediff.timeamount} {} {datediff.timeunit} {} ago
          </h4>

=======
          <h4>
            {datediff.timeamount} {} {datediff.timeunit} {} ago
          </h4>
>>>>>>> develop
        </div>
      </div>
    </a>
  )
}

export default SingleCommit
