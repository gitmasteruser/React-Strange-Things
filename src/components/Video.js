
import data from "../data/en_US.json";
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class Video extends Component {
    render() {
        return <ReactPlayer url={data.videoembed[0].src} playing />
    }
}


export default Video;