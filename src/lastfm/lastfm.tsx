import React, { Component } from "react"
import { Track } from "../shared/models/lastfmtracklist"
import goldmedal from "./gold-medal.png"
import noteicon from "./musical-note.png"
import fetch from "node-fetch"

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
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=kobbis&api_key=" +
        "7a76d767885fc752b57a627ecc0a6f6f" +
        "&format=json"
    )
      .then(response => response.json())
      .then(data => this.setState({ data }))
    fetch(
      "https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=kobbis&api_key=" +
        "7a76d767885fc752b57a627ecc0a6f6f" +
        "&format=json"
    )
      .then(response => response.json())
      .then(data2 => this.setState({ data2 }))
  }

  getNowPlaying(newestTrack: Track) {
    if (newestTrack["@attr"]?.nowplaying) {
      return (
        <div className="inline-flex -mb-2">
          <img src={newestTrack.image[0]["#text"]} className="mr-1  h-10"></img>
          <img src={noteicon} className="h-10"></img>
          <h4 className="mt-1">
            {newestTrack.artist["#text"]} - {newestTrack.name}
          </h4>
        </div>
      )
    }
  }

  getTopSongOfWeek(topTrack: Track) {
    return (
      <div className="inline-flex mt-2">
        <img src={topTrack.image[0]["#text"]} className="mr-1 h-10 -mt-2"></img>
        <img src={goldmedal} className="h-10 -mt-2"></img>
        <h4>
          {" "}
          {topTrack.artist["#text"]} - {topTrack.name}
        </h4>
      </div>
    )
  }

  render() {
    const {
      state: { data, data2 },
    } = this

    if (data === null || data2 === null) {
      return <></>
    }

    return (
      <div className="bg-gray-800 max-w-xl m-auto rounded-lg mb-0 p-2">
        {this.getNowPlaying(data.recenttracks?.track[0])}
        {this.getTopSongOfWeek(data2.weeklytrackchart?.track[0])}
      </div>
    )
  }
}

export default LastFm
