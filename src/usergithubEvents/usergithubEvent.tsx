import React, { Component } from "react"
import PropTypes from "prop-types"
import { GitHubEvent } from "../shared/models/githubEvent"
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

  renderCommit(commit, index) {
    if (commit != null) {
      return <EventPush commit={commit} key={index}></EventPush>
    }
  }

  getBranch(ref: string) {
    if (ref != null) {
      const indexOfLastSlash = ref.lastIndexOf("/")
      const branchName = ref.substring(indexOfLastSlash + 1, ref.length)
      return "- " + branchName
    }
  }

  render() {
    const {
      toggleHidden,
      state: { datediff, isHidden },
      props: { event },
    } = this
    let commitscontainer = "flex flex-col section"

    if (isHidden) {
      commitscontainer += " section-collapsed "
    } else {
      commitscontainer += ""
    }

    return (
      <div className="flex flex-col bg-gray-900 border-gray-800 border-t-2 ">
        <div
          className="ml-2  w-full flex flex-col p-3 cursor-pointer hover:bg-black"
          onClick={toggleHidden}
        >
          <h3 className=""> {event.repo.name} </h3>
          <h4>
            {event.type}
            {this.getBranch(event.payload.ref)}
          </h4>
          <h4>
            {datediff.timeamount} {} {datediff.timeunit} {} ago
          </h4>
        </div>
        <div className={commitscontainer}>
          {event.payload.commits?.map((value, index) => {
            return this.renderCommit(value, index)
          })}
        </div>
      </div>
    )
  }
}

export default UserEvent
