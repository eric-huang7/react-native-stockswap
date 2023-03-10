import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

export default class UserBox extends Component {
  render() {
    const {item, index} = this.props;

    return (
      <SafeAreaView
        style={
          index % 2 !== 0
            ? {...style.container, backgroundColor: '#2a334a'}
            : {...style.container}
        }>
        {/* <Image style={style.image} source={{uri: item.img}} /> */}
          {/* ///WORKING Add response url */}
                    <Image
                      style={style.image}
                      source={{uri:`https://d13h17hkw4i0vn.cloudfront.net/${item.userId}/profile.jpg`, headers:{Authorization: `Bearer ${this.props.reduxToken}`}}}
                    />

        <View style={style.detailsContainer}>
          <Text style={style.name}>{item.name}</Text>


          <Text style={style.posts}>
            Username: <Text style={style.detailsBold}>{item.username}</Text>
          </Text>

          <Text style={style.posts}>
            Posts: <Text style={style.detailsBold}>{item.posts}</Text>
          </Text>
          <Text style={style.followers}>
            Followers: <Text style={style.detailsBold}>{item.followers}</Text>
          </Text>
          <Text style={style.followers}>
            Trading since:{' '}
            <Text style={style.detailsBold}>2004</Text>
          </Text>
        </View>
        <View style={style.percentageView}>
          <Text style={style.percentage}>{item.percentage}%</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#324165',
  },
  image: {
    height: moderateScale(63),
    width: moderateScale(63),
    borderRadius: moderateScale(50),
  },
  imgDetailContainer: {
    flexDirection: 'row',
    marginLeft: moderateScale(-8),
  },
  detailsContainer: {
    flexDirection: 'column',
    marginLeft: moderateScale(-150),
    justifyContent: 'space-between',
  },
  name: {
    fontSize: moderateScale(16),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
  },
  posts: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  followers: {
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  percentageView: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  percentage: {
    alignSelf: 'center',
    color: '#1AB968',
    fontSize: moderateScale(16),
    fontFamily: 'Montserrat-Bold',
  },
  detailsBold: {
    fontFamily: 'Montserrat-Medium',
    color: '#FFFFFF',
    fontSize: moderateScale(12),
  },
});
