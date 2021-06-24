import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Wannabe', duration: '4:05' },
        { title: 'Smells Like Teen Spirit', duration: '2:05' },
        { title: 'Baby Got Back', duration: '3:05' },
        { title: 'Truly Madly Deeply', duration: '4:35' },
        { title: 'MMMBop', duration: '4:35' },
        { title: 'You Oughta Know', duration: '4:35' },
        { title: 'I want It That Way', duration: '4:35' },
    ]
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});