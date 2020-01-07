import React, { useState, useEffect } from "react"
import { GitHubEvent } from "../models/githubEvent"
import UserEvent from "./usergithubEvent"

//api.github.com/repos/ohanhimaki/ohanhimaki2020/commits

const UserEvents = () => {
  const [allEvents, setAllEvents] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/ohanhimaki/events")
      .then(result => result.json())
      .then(data => {
        data = data.slice(0, 5)
        setAllEvents(data)
      })
  }, [])

  if (allEvents.length === 0 || allEvents === null) {
    return <></>
  }
  return (
    <div className="child-rounded">
      {allEvents.map((value: GitHubEvent, index: any) => {
        return <UserEvent event={value} key={index}></UserEvent>
      })}
    </div>
  )
}

export default UserEvents
