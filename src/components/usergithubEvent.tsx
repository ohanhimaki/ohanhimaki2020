import React from "react"
import { GitHubEvent } from "../models/githubEvent"
import timeAgo from "../helpers/date"

interface Props {
  event: GitHubEvent
}

const UserEvent = ({ event }: Props) => {
  const date = new Date(event.created_at)
  const datediff = timeAgo(date)

  return (
    <div className="flex bg-gray-900 border-gray-800 border-t-2 p-3">
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
