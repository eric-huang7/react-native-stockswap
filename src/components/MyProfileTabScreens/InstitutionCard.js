import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import {moderateScale} from '../../util/responsiveFont';

class InstitutionCard extends Component {
  render() {
    const {portfolioAccounts, itemId, insId} = this.props;
    console.log(portfolioAccounts, 'ACCOUNTS');
    const filteredAccounts = portfolioAccounts.accounts.filter(
      (account) => account.itemId == itemId,
    );

    const filteredInstitutions = this.props.institution.filter(
      (institution) => institution.id == insId,
    );
    if (!this.props) {
      return null;
    }
    return (
      <View style={style.institutionCard}>
        {filteredInstitutions.map((item, index) => (
          <View key={index}>
            <Text style={style.accountName}>{item.name}</Text>
          </View>
        ))}

        {filteredAccounts.map((item, index) => (
          <View key={index}> 
            <Text style={style.accountOfficial}>{item.name}</Text>
            {/* <Text style={style.account}>{item.name}</Text>
            <Text style={style.hashtag}>{item.itemId}</Text> */}
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    portfolioAccounts: state.user.portfolioAccounts,
    institution: state.user.institution,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PortfolioAccounts: () => dispatch(PortfolioAccounts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InstitutionCard);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  institutionCard: {
    // borderColor:'lightgrey',
    // borderWidth:.5,
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(4),
    padding: moderateScale(4),
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(22),
  },
  username: {
    color: 'white',
    fontSize: moderateScale(15),
  },
  hashtag: {
    color: '#9082cf',
    fontSize: moderateScale(14),
  },

  accountName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(20),
  },
  accountOfficial: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(16),
  },
  account: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: moderateScale(16),
    marginBottom: moderateScale(12),
  },
});
