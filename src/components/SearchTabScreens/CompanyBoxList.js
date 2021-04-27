import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

import SearchInput from '../../icons/SearchInput';
import {connect} from 'react-redux';
import CompanyBox from '../SearchTabComponents/CompanyBox';
// import {fetchMarketGainers} from '../../actions/marketMovers'

export class CompanyBoxList extends Component {
  //Ready for redux action hookup
  //   componentDidMount() {
  //     const {companies, fetchGainers} = this.props;
  //     fetchGainers(companies);
  // }
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (text) => {
    console.log(text);
  };

  render() {
    const {gainers, losers, highestByVolume} = this.props;

    return (
      <SafeAreaView style={style.mainContainer}>
        <ScrollView contentContainerStyle={{paddingBottom: moderateScale(180)}}>
          <View style={style.searchInputContainer}>
            <View
              style={{
                position: 'absolute',
                zIndex: 1,
                left: 14,
                top: 10,
              }}>
              <SearchInput />
            </View>
            <TextInput
              style={style.searchInput}
              placeholder="Search"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>

          <View style={style.container}>
            <View style={style.headerContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CompanyCategory', {
                    name: 'Gainers',
                    params: {
                      category: gainers,
                    },
                  })
                }>
                <Text style={style.header}>Daily Gainers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CompanyCategory', {
                    name: 'Gainers',
                    params: {
                      category: gainers,
                    },
                  })
                }>
                <Text style={style.seeAllHeader}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={style.boxContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                justifyContent="space-between">
                {gainers.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'CompanyInformation',
                          params: {item},
                        })
                      }>
                      <CompanyBox item={item} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>

          <View style={style.container}>
            <View style={style.headerContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CompanyCategory', {
                    name: 'Losers',
                    params: {
                      category: losers,
                    },
                  })
                }>
                <Text style={style.header}>Daily Losers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CompanyCategory', {
                    name: 'Losers',
                    params: {
                      category: losers,
                    },
                  })
                }>
                <Text style={style.seeAllHeader}>See all</Text>
              </TouchableOpacity>
            </View>

            <View style={style.boxContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                justifyContent="space-between">
                {losers.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'CompanyInformation',
                          params: {item},
                        })
                      }>
                      <CompanyBox item={item} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>

          <View style={style.container}>
            <View style={style.headerContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CompanyCategory', {
                    name: 'Highest by Volume',
                    params: {
                      category: highestByVolume,
                    },
                  })
                }>
                <Text style={style.header}>Daily Highest by Volume</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('CompanyCategory', {
                    name: 'Highest by Volume',
                    params: {
                      category: highestByVolume,
                    },
                  })
                }>
                <Text style={style.seeAllHeader}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={style.boxContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                justifyContent="space-between">
                {highestByVolume.map((item) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() =>
                        this.props.navigation.navigate({
                          name: 'CompanyInformation',
                          params: {item},
                        })
                      }>
                      <CompanyBox item={item} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gainers: state.company.gainers,
    losers: state.company.losers,
    highestByVolume: state.company.highestByVolume,
  };
};

//Ready for redux hook up. Add mapDipatchToProps in export
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGainers: () => dispatch(fetchMarketGainers()),
//   };
// };
export default connect(mapStateToProps)(CompanyBoxList);

const style = StyleSheet.create({
  mainContainer: {
    marginBottom: moderateScale(50),
  },
  container: {
    marginBottom: moderateScale(18),
    paddingHorizontal: moderateScale(2),
  },
  boxContainer: {
    paddingLeft: moderateScale(2),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: moderateScale(8),
    marginBottom: moderateScale(4),
  },
  header: {
    fontSize: moderateScale(17),
    marginLeft: moderateScale(5.5),
    color: 'lightgrey',
    fontFamily: 'Montserrat-Regular',
  },
  seeAllHeader: {
    paddingTop: moderateScale(3.5),
    paddingRight: moderateScale(2),
    fontSize: moderateScale(15),
    fontSize: moderateScale(15),
    color: '#B8A0FF',
    fontFamily: 'Montserrat-SemiBold',
  },
  searchInputContainer: {
    flexDirection: 'row',
    marginBottom: moderateScale(15),
  },
  searchInput: {
    flex: 1,
    paddingLeft: moderateScale(40),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(16),
    height: moderateScale(36),
    paddingVertical: moderateScale(0),
    fontFamily: 'Montserrat-Italic',
  },
});
