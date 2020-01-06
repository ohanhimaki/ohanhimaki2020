import React from "react"
import { GitHubEvent } from "../models/githubEvent"

interface Props {
  event: GitHubEvent
}

const UserEvent = ({ event }: Props) => {
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

  const date = new Date(event.created_at)
  const datediff = timeAgo(date)

  return (
    <div className="flex bg-gray-900 border-gray-800 border-t-2">
      <div className="ml-2">
        <h3 className=""> {event.repo.name}</h3>
        <h4>{event.type}</h4>
        <h4>
          {datediff.timeamount} {} {datediff.timeunit} {} ago
        </h4>
      </div>
    </div>
  )
}

export default UserEvent
