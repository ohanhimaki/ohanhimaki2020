import React, { Component } from "react"
import LastFm from "../lastfm/lastfm"
import fetch from "node-fetch"

import "./watermark.css"

class Watermark extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentWillMount() {
    fetch("https://quotes.rest/qod")
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {
    const {
      state: { data },
    } = this

    let quoteText =
      "Shoot for the moon and if you miss you will still be among the stars"
    let author = "Les Brown"
    let poweredby = ""

    if (data != null && data.error === undefined) {
      quoteText = data.contents.quotes[0].quote
      author = data.contents.quotes[0].author
      poweredby = "Powered by: They Said So"
    }

    return (
      <div className="watermark">
        <div className="table-cell watermark-cell">
          {quoteText}
          <br />
          <span className="author">-{author}</span>
          <br />
          <span className="poweredby"> {poweredby}</span>
        </div>
      </div>
    )
  }
}

export default Watermark
