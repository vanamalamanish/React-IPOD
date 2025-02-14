import React, { Component } from "react";

const songs = [
  { title: "Badaas", src: "/songs/1.mp3" },
  { title: "Bujji Talli", src: "/songs/2.mp3" }
];

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      currentSongIndex: 0,
    };
    this.audio = new Audio(songs[0].src);
  }

  togglePlayPause = () => {
    if (this.state.isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  playNext = () => {
    let newIndex = (this.state.currentSongIndex + 1) % songs.length;
    this.setState({ currentSongIndex: newIndex });
    this.audio.src = songs[newIndex].src;
    this.audio.play();
  };

  playPrevious = () => {
    let newIndex = (this.state.currentSongIndex - 1 + songs.length) % songs.length;
    this.setState({ currentSongIndex: newIndex });
    this.audio.src = songs[newIndex].src;
    this.audio.play();
  };

  render() {
    const { isPlaying, currentSongIndex } = this.state;
    return (
      <div className="music-screen">
        <h2>Now Playing:</h2>
        <p>{songs[currentSongIndex].title}</p>
        <p>{isPlaying ? "🎵 Playing" : "⏸ Paused"}</p>
        <button onClick={this.playPrevious}>⏮</button>
        <button onClick={this.togglePlayPause}>{isPlaying ? "⏸" : "▶"}</button>
        <button onClick={this.playNext}>⏭</button>
      </div>
    );
  }
}

export default Music;
