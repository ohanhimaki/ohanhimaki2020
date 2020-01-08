import React, { Component } from "react"
import PropTypes from "prop-types"
import { GitHubEvent } from "../models/githubEvent"
import timeAgo from "../helpers/date"
import EventPush from "./eventPush"

class UserEvent extends Component {
  constructor(props) {
    super(props)

    const date = new Date(props.event.created_at)
    const datediff = timeAgo(date)
    this.state = {
      isHidden: true,
      datediff: datediff,
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden,
    })
  }

  renderCommit(commit) {
    if (commit != null) {
      return <EventPush commit={commit}></EventPush>
    }
  }

  // toggleCommits(this, stateofCommits) {
  //   if (stateofCommits === "hidden") {
  //     this.setState({ stateofCommits: "" })
  //   } else {
  //     this.setState({ stateofCommits: "hidden" })
  //   }
  // }

  render() {
    const {
      toggleHidden,
      state: { datediff, isHidden },
      props: { event },
    } = this

    return (
      <div className="flex flex-col bg-gray-900 border-gray-800 border-t-2 ">
        <div
          className="ml-2  w-full flex flex-col p-3 cursor-pointer"
          onClick={toggleHidden}
        >
          <h3 className=""> {event.repo.name}</h3>
          <h4>{event.type}</h4>
          <h4>
            {datediff.timeamount} {} {datediff.timeunit} {} ago
          </h4>
        </div>
        {!isHidden && (
          <div className="flex flex-col">
            {event.payload.commits?.map(value => {
              return this.renderCommit(value)
            })}
          </div>
        )}
      </div>
    )
  }
}

export default UserEvent
