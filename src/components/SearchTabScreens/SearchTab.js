import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import CompanyBoxList from './CompanyBoxList';
import UserList from './UserList.js';
import ArticleList from './ArticleList';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../util/responsiveFont';

export class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: true,
      users: false,
      news: false,
    };
  }

  render() {
    return (
      <LinearGradient
        start={{x: 0.1, y: 0.1}}
        end={{x: 1, y: 1}}
        colors={[
          '#1d2842',
          '#1f2a45',
          '#222d47',
          '#242f4a',
          '#27324d',
          '#293450',
          '#2c3752',
          '#2e3955',
          '#313c58',
          '#333e5c',
          '#36415f',
          '#394463',
        ]}
        style={{flex: 1}}>
        <SafeAreaView>
          {/* <ScrollView> */}
          <LinearGradient
            start={{x: 0.1, y: 0.1}}
            end={{x: 1, y: 1}}
            colors={[
              '#2c3752',
              '#2e3955',
              '#313c58',
              '#333e5c',
              '#36415f',
              '#394463',
            ]}>
            <Text style={style.header}>Search</Text>

            <View style={style.tabSelectorContainer}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    companies: true,
                    users: false,
                    news: false,
                  })
                }>
                <View
                  style={
                    this.state.companies
                      ? {...style.activeTabHeaderView}
                      : {...style.tabHeaderView}
                  }>
                  <Text
                    style={
                      this.state.companies
                        ? {...style.activeTabHeader}
                        : {...style.tabHeader}
                    }>
                    Stocks
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    companies: false,
                    news: true,
                    users: false,
                  })
                }>
                <View
                  style={
                    this.state.news
                      ? {...style.activeTabHeaderView}
                      : {...style.tabHeaderView}
                  }>
                  <Text
                    style={
                      this.state.news
                        ? {...style.activeTabHeader}
                        : {...style.tabHeader}
                    }>
                    News
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    companies: false,
                    news: false,
                    users: true,
                  })
                }>
                <View
                  style={
                    this.state.users
                      ? {...style.activeTabHeaderView}
                      : {...style.tabHeaderView}
                  }>
                  <Text
                    style={
                      this.state.users
                        ? {...style.activeTabHeader}
                        : {...style.tabHeader}
                    }>
                    People
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          {this.state.companies ? (
            <CompanyBoxList navigation={this.props.navigation} />
          ) : this.state.news ? (
            <ArticleList />
          ) : this.state.users ? (
            <UserList navigation={this.props.navigation} />
          ) : (
            <View>
              <Text>Search Screen</Text>
            </View>
          )}
          {/* </ScrollView> */}
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

export default SearchTab;

const style = StyleSheet.create({
  searchInputContainer: {
    alignItems: 'center',
    padding: moderateScale(4.8),
    marginTop: moderateScale(0),
  },
  searchInput: {
    borderWidth: moderateScale(0.5),
    width: '90%',
    fontSize: moderateScale(17),
    fontStyle: 'italic',
    textAlign: 'left',
    padding: moderateScale(2.5),
    opacity: 0.8,
    marginBottom: moderateScale(20),
    paddingLeft: moderateScale(5),
  },
  header: {
    color: '#FFFFFF',
    fontSize: moderateScale(19),
    fontWeight: '700',
    marginVertical: moderateScale(8),
    textAlign: 'center',
  },
  tabSelectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: moderateScale(15),
    paddingBottom: moderateScale(2),
  },
  tabHeader: {
    color: '#FFFFFF',
    fontSize: moderateScale(17),
    fontWeight: 'bold',
  },
  activeTabHeaderView: {
    borderBottomWidth: moderateScale(3),
    borderBottomColor: '#855cff',
    paddingBottom: moderateScale(1.8),
  },
  activeTabHeader: {
    color: '#8257FF',
    textShadowColor: '#8257FF',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 50,
    fontSize: moderateScale(17),
    fontWeight: 'bold',
  },
});
