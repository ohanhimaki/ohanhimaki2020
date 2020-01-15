import React, { Component } from "react"
import { Track } from "../shared/models/lastfmtracklist"

class LastFm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      data2: null,
    }
  }

  componentWillMount() {
    fetch(
      "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kobbis&api_key=" +
        process.env.REACT_APP_LASTFM_API_KEY +
        "&format=json"
    )
      .then(response => response.json())
      .then(data => this.setState({ data }))

    fetch(
      "http://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=kobbis&api_key=" +
        process.env.REACT_APP_LASTFM_API_KEY +
        "&format=json"
    )
      .then(response => response.json())
      .then(data2 => this.setState({ data2 }))
  }

  getNowPlaying(newestTrack: Track) {
    console.log(newestTrack)

    if (newestTrack["@attr"]?.nowplaying) {
      return (
        <h4>
          <img src={newestTrack.image[0]["#text"]}></img>
          NP: {newestTrack.artist["#text"]} - {newestTrack.name}
        </h4>
      )
    }
  }

  getTopSongOfWeek(topTrack: Track) {
    console.log(topTrack)

    return (
      <h4>
        <img src={topTrack.image[0]["#text"]}></img> {topTrack.artist["#text"]}{" "}
        - {topTrack.name}
      </h4>
    )
  }

  render() {
    const {
      state: { data, data2 },
    } = this

    if (data === null || data2 === null) {
      return <></>
    }
    let NPbackground = ""

    if (data.recenttracks?.track[0]["@attr"]?.nowplaying) {
      NPbackground = "backgroundImage : url("
    }

    return (
      <div className="bg-gray-800 max-w-xl m-auto px-8 py-2 rounded-lg my-4">
        {this.getNowPlaying(data.recenttracks?.track[0])}
        {this.getTopSongOfWeek(data2.weeklytrackchart?.track[0])}
      </div>
    )
  }
}

export default LastFm
