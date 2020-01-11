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
    this.divClickFunction = this.divClickFunction.bind(this)
    this.getSubtitles = this.getSubtitles.bind(this)
  }

  divClickFunction(something?: any) {
    this.setState({
      isHidden: !this.state.isHidden,
    })
    if (something.pull_request) {
      console.log(something)

      window.open(something.pull_request.html_url)
      return
    }
    // if (something.comment) {
    //   window.open(something.comment.html_url)
    //   return
    // }
    if (something.issue && !something.comment) {
      window.open(something.issue.html_url)
    }
  }

  renderCommit(commit, index) {
    if (commit != null) {
      return <EventPush commit={commit} key={index}></EventPush>
    }
  }

  getBranch(ref: string) {
    const types = {
      default: "",
      master: "text-red-800",
      develop: "text-green-800",
    }
    if (ref != null) {
      const indexOfLastSlash = ref.lastIndexOf("/")
      const branchName = ref.substring(indexOfLastSlash + 1, ref.length)
      return (
        <span>
          {" "}
          - <span className={types[branchName]}>{branchName}</span>
        </span>
      )
    }
  }
  getCommitCount(commits: []) {
    if (commits != null) {
      return " - " + commits.length + " Commits"
    }
  }
  getIssueName(event: any) {
    let className = ""
    if (event.payload.issue != null) {
      let title = event.payload.issue.title
      if (event.payload.comment == null) {
        const types = {
          default: "",
          closed: "text-red-800",
          opened: "text-green-800",
        }
        className = types[event.payload.action] || types["default"]
        title = event.payload.action + ": " + title
      }
      return (
        <span>
          {" "}
          - <span className={className}>{title} </span>
        </span>
      )
    }
  }
  getMoreInfo(payload: any) {
    if (payload.comment) {
      return (
        <div className="flex bg-gray-900 border-gray-800 border-t-2 p-1 mx-3 hover:bg-black">
          <a
            href={payload.comment.html_url}
            target="__blank"
            className="flex-row w-full"
          >
            <h6>{payload.comment.body}</h6>
          </a>
        </div>
      )
    }
  }
  getEventType(eventType: string) {
    const types = {
      default: eventType,
      PushEvent: "Push",
      IssueCommentEvent: "Issue commented",
      IssuesEvent: "Issue",
      PullRequestEvent: "Pull request",
    }

    return types[eventType] || types["default"]
  }
  getPullRequestAction(event: any) {
    if (event.payload.pull_request) {
      console.log(event)

      const types = {
        default: "",
        closed: "text-red-800",
        opened: "text-green-800",
      }
      return (
        <span className={types[event.payload.action] || types["default"]}>
          {} - {event.payload.action}
          {event.payload.pull_request.merged ? ", merged" : ""}
        </span>
      )
    }
  }

  getSubtitles(event: any) {
    const test = (
      <div>
        <h4>
          {this.getEventType(event.type)}
          {this.getBranch(event.payload.ref)}
          {this.getCommitCount(event.payload.commits)}
          {this.getPullRequestAction(event)}
          {this.getIssueName(event)}
        </h4>
      </div>
    )

    return test
  }

  render() {
    const {
      getMoreInfo,
      divClickFunction,
      getSubtitles,
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
          onClick={() => divClickFunction(event.payload)}
        >
          <h3 className=""> {event.repo.name} </h3>
          {getSubtitles(event)}
          <h4>
            {datediff.timeamount} {} {datediff.timeunit} {} ago
          </h4>
        </div>
        <div className={commitscontainer}>
          {event.payload.commits?.map((value, index: number) => {
            return this.renderCommit(value, index)
          })}
          {getMoreInfo(event.payload)}
        </div>
      </div>
    )
  }
}

export default UserEvent
