import React,{useState, useEffect} from 'react';
import Dropdown from './Dropdown';
import Listbox from './Listbox';
import Detail from './Detail';
import axios from 'axios';
import {Credentials} from './Credentials';
import './Music.css'
import TeamNavbar from './TeamNavbar';

const Media = () => {

  const spotify = Credentials();


const [token, setToken] = useState('');
const [genres, setGenres] = useState({selectedGenre:'', listOfGenresFromAPI:[]});
const [playlist, setPlaylist] = useState({selectedPlaylist: '', listOfPlaylistFromAPI: []});
const [tracks, setTracks] = useState({selectedTrack: '', listOfTracksFromAPI: []});
const [trackDetail, setTrackDetail] = useState(null);

useEffect(() => {

  axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  })
  .then(tokenResponse => {      
    setToken(tokenResponse.data.access_token);

    axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
      method: 'GET',
      headers: {'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
    })
    .then (genreResponse => {
      setGenres({
        selectedGenre: genres.selectedGenre,
        listOfGenresFromAPI: genreResponse.data.categories.items,
      });
    });
  });  

}, [genres.selectedGenre, spotify.ClientId, spotify.ClientSecret]);

const genreChanged = val => {
  setGenres({
    selectedGenre: val,
    listOfGenresFromAPI: genres.listOfGenresFromAPI
  });

  axios(`https://api.spotify.com/v1/browse/categories/${val}/playlists?limit=10`, {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token}
  })
  .then(playlistResponse => {
    setPlaylist({
      selectedPlaylist: playlist.selectedPlaylist,
      listOfPlaylistFromAPI: playlistResponse.data.playlists.items
    })
  })
}

const playlistChanged = val => {
  console.log(val);
  setPlaylist({
    selectedPlaylist: val,
    listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI
  });
}

const buttonClicked = e => {
  e.preventDefault();

  axios(`https://api.spotify.com/v1/playlists/${playlist.selectedPlaylist}/tracks?limit=10`, {
    method: 'GET',
    headers: {
      'Authorization' : 'Bearer ' + token
    }
  })
  .then(tracksResponse => {
    setTracks({
      selectedTrack: tracks.selectedTrack,
      listOfTracksFromAPI: tracksResponse.data.items
    })
  });
}

// when we click on the list box item we get to select the track id because we set that to the id of the actual button
// we then use the ... spread operator on our track state variable to create a new list of tracks
// we use the filter method to find the track containing the track id matching that of our button id
const listboxClicked = val => {
  const currentTracks = [...tracks.listOfTracksFromAPI];
  const trackInfo = currentTracks.filter(t => t.track.id === val);
  setTrackDetail(trackInfo[0].track); //store track info inside of our TrackDetail variable

}


return(
  <div>
    <TeamNavbar/>
  <div className='media-container'>
  <form onSubmit={buttonClicked}>
  <div className='spotify-container'>
   <Dropdown label='Select Genre' options={genres.listOfGenresFromAPI} selectedValue={genres.selectedGenre} changed={genreChanged}/>
   <Dropdown label='Select Playlist' options={playlist.listOfPlaylistFromAPI} selectedValue={playlist.selectedPlaylist} changed={playlistChanged}/>
   <button type='submit' className='searchbtn'>
     Search
   </button>
   {/* passing track object to track detail component with "spread operator" so the key value pairs of the object are extracted for us */}
   <Listbox items={tracks.listOfTracksFromAPI} clicked={listboxClicked}/> 
   {trackDetail && <Detail {...trackDetail}/>}
  </div>
  </form>
  </div>
  </div>
);

}

export default Media;
