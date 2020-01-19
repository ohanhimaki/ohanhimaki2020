import React, { useState, useEffect } from "react"
import { GitHubEvent } from "../shared/models/githubEvent"
import UserEvent from "./usergithubEvent"

//api.github.com/repos/ohanhimaki/ohanhimaki2020/commits

const UserEvents = () => {
  const [allEvents, setAllEvents] = useState([])
  const [listLength, setListLength] = useState(5)
  useEffect(() => {
    fetch("https://api.github.com/users/ohanhimaki/events")
      .then(result => result.json())
      .then(data => {
        data = data.slice(0, 10)
        setAllEvents(data)
      })
  }, [])

  if (allEvents.length === 0 || allEvents === null) {
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
    <div className="child-rounded-bot section">
      {allEvents
        .slice(0, listLength)
        .map((value: GitHubEvent, index: number) => {
          return <UserEvent event={value} key={index}></UserEvent>
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

export default UserEvents
