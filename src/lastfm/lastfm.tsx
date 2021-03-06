import React, { Component } from "react"
import {
  Track as TrackNP,
  LastFMNowPlaying,
} from "../shared/models/LastFMNowPlaying"
import goldmedal from "./gold-medal.png"
import noteicon from "./musical-note.png"
import fetch from "node-fetch"

import "./lastfm.css"
import {
  Track as TrackLW,
  LastFMWeekChart,
} from "../shared/models/LastFMWeekChart"

interface Props {}

interface IState {
  data: LastFMNowPlaying
  data2: LastFMWeekChart
}

class LastFm extends Component<{}, IState> {
  constructor(props: Props) {
    super(props)

    this.state = {
      data: { recenttracks: undefined },
      data2: { weeklytrackchart: undefined },
    }
    this.livenowplaying = this.livenowplaying.bind(this)
  }

  livenowplaying() {
    setTimeout(() => {
      fetch(
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=kobbis&api_key=" +
          "7a76d767885fc752b57a627ecc0a6f6f" +
          "&format=json"
      )
        .then(response => response.json())
        .then(data => this.setState({ data }))

      this.livenowplaying()
    }, 2000)
  }

  componentWillMount() {
    this.livenowplaying()
    fetch(
      "https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&limit=1&user=kobbis&api_key=" +
        "7a76d767885fc752b57a627ecc0a6f6f" +
        "&format=json"
    )
      .then(response => response.json())
      .then(data2 => this.setState({ data2 }))
  }

  getNowPlaying(newestTrack: TrackNP) {
    if (newestTrack) {
      if (newestTrack["@attr"]?.nowplaying) {
        return (
          <div className="inline-flex -mb-2 w-full">
            <img
              src={newestTrack?.image[2]["#text"]}
              className="mr-1  h-10"
            ></img>
            <img
              src={noteicon}
              className="h-10 nowplaying"
              title="Now playing!"
            ></img>
            <h4 className="mt-1">
              {newestTrack.artist["#text"]} - {newestTrack.name}
            </h4>
          </div>
        )
      }
    }
  }

  getTopSongOfWeek(topTrack: TrackLW) {
    return (
      <div className="inline-flex mt-2 w-full">
        {/* TOOLTIP */}
        <img
          src={topTrack?.image[2]["#text"]}
          className="mr-1 h-10 -mt-2"
        ></img>
        <img
          src={goldmedal}
          className="h-10 -mt-2 toptrack"
          title="Top track last 7 days"
        ></img>
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

    if (
      data.recenttracks === undefined ||
      data2.weeklytrackchart === undefined
    ) {
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
