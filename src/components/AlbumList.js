import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = {
    albums: [
      {
        title: 'Ortak sınav Song Title',
        artist: 'Mehmet Yıldırım',
        url: 'https://i.imgur.com/K3KJ3w4h.jpg',
        image: 'https://i.imgur.com/K3KJ3w4h.jpg',
        thumbnail_image: './elif.jpg'
      }
    ]
  };

  componentWillMount() {
    Axios.get(
      'https://rallycoding.herokuapp.com/api/music_albums'
    ).then(response =>
      this.setState({ albums: response.data }).catch(error => {
        console.log('Internet kapalı');
        console.log(error);
      })
    );
  }
  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }
  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
