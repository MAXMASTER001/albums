import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = props => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle} />
      <Image
        style={styles.thumbnailStyle}
        source={{ uri: props.album.thumbnail_image }}
      />
      {/* <Image style={styles.thumbnailStyle} source={require('./el.jpg')} /> */}
      <View style={styles.headerColumnStyle}>
        <Text>{props.album.title} </Text>
        <Text>{props.album.artist} </Text>
      </View>

    </CardSection>
    <CardSection>
      <Image style={styles.imageStyle} source={{ uri: props.album.image }} />
    </CardSection>

    <CardSection>
      <Button basildiginda={() => Linking.openURL(props.album.url)}>
      Şimdi satın al!
    </Button>
    </CardSection>

  </Card>
);

const styles = {
  headerColumnStyle: {
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
    marginRight: 3
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
