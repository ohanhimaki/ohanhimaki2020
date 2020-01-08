import React, { Component } from "react"

class EventPush extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentWillMount() {
    fetch(this.props.commit.url)
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }
  render() {
    const messageLength = 65
    const {
      state: { data },
      // props: { event },
    } = this

    if (data === null) {
      return <></>
    }

    return (
      <div className="flex bg-gray-900 border-gray-800 border-t-2 p-1 mx-3">
        <a href={data.html_url} target="__blank" className="flex-row w-full">
          <h6>
            {data.commit.message.substring(0, messageLength)}
            {data.commit.message.length > messageLength ? "..." : ""}
          </h6>
          {/* <div className="ml-2">
          <h3 className=""> {event.repo.name}</h3>
          <h4>{event.type}</h4>
          <h4>
            {datediff.timeamount} {} {datediff.timeunit} {} ago
          </h4>
        </div> */}
          <div className="flex flex-row flex-no-wrap items-end justify-end -my-2">
            <div className="text-green-800 flex-initial px-2">
              +{data.stats.additions}
            </div>
            <div className="text-red-800 flex-initial">
              -{data.stats.deletions}
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default EventPush
