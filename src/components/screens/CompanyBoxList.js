import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {companyBoxStyles} from '../../styles/companyBoxStyles';
import CompanyBox from './CompanyBox';
// import {fetchMarketGainers} from '../../actions/marketMovers'

export class CompanyBoxList extends Component {
  //Ready for redux action hookup
  //   componentDidMount() {
  //     const {companies, fetchGainers} = this.props;
  //     fetchGainers(companies);
  // }

  render() {
    const {gainers} = this.props;
    const {losers} = this.props;
    const {highestByVolume} = this.props;

    return (
      <View style={companyBoxStyles.mainContainer}>
        <View style={companyBoxStyles.container}>
          <Text style={companyBoxStyles.header}>Gainers</Text>
          <View style={companyBoxStyles.boxContainer}>
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
          </View>
        </View>
        <View style={companyBoxStyles.container}>
          <Text style={companyBoxStyles.header}>Losers</Text>
          <View style={companyBoxStyles.boxContainer}>
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
          </View>
        </View>
        <View style={companyBoxStyles.container}>
          <Text style={companyBoxStyles.header}>Highest by Volume</Text>
          <View style={companyBoxStyles.boxContainer}>
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
          </View>
          </View>
      </View>
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