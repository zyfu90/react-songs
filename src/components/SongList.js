import React from 'react';
import {connect} from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// map Redux state to props to be used in Class SongList above
const mapStateToProps = (state) => {
  return {songs: state.songs};
};

// excute the function returned by the connect,
// and pass the SongList as parameter
// First parameter: mapStateTo Props
// Second parameter: an Object or function, mapDispatchToProps,
// Is passes actions to be used in SongList component
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);
