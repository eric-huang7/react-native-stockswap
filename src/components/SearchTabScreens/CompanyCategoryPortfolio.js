import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {moderateScale} from '../../util/responsiveFont';
import CompanyCategoryPortfolioBox from '../SearchTabComponents/CompanyCategoryPortfolioBox';

export class CompanyCategoryPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }
  handleChange = (text) => {
    this.setState({input: text});
  };

  render() {
    const {category} = this.props.route.params.params;
console.log(this.props,"PROPS")
    const filteredCategory = category.filter(
      (item) =>
        item.tickerSymbol.toLowerCase().includes(this.state.input.toLowerCase()) 
        // ||
        // item.symbol.toLowerCase().includes(this.state.input.toLowerCase()),
    );

    return (
      <LinearGradient
        style={style.linearContainer}
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
        <SafeAreaView style={style.boxContainer}>
          <View style={style.searchInputContainer}>
            <TextInput
              style={style.searchInput}
              placeholder="Search by name"
              placeholderTextColor="lightgrey"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>

          <FlatList
            keyExtractor={(item, index) => index.toString()}
            style={style.listContainer}
            data={filteredCategory}
            renderItem={({item, index}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate({
                    name: 'ManagePortfolioCompany',
                    params: {item},
                  })
                }>
                <CompanyCategoryPortfolioBox item={item} index={index} />
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

export default CompanyCategoryPortfolio;

const style = StyleSheet.create({
  boxContainer: {
    flex: 1,
  },
  linearContainer: {
    paddingBottom: moderateScale(5),
    flex: 1,
  },
  listContainer: {},
  searchInputContainer: {
    marginBottom: moderateScale(32),
  },
  searchInput: {
    paddingLeft: moderateScale(40),
    alignContent: 'center',
    backgroundColor: '#3e4d6c',
    color: 'lightgrey',
    fontSize: moderateScale(16.5),
    height: moderateScale(40),
    paddingVertical: 0,
    fontFamily: 'Montserrat-Regular',
  },
});
