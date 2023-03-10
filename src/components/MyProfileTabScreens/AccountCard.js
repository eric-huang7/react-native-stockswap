import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import {moderateScale} from '../../util/responsiveFont';
import ManagePortfolioBox from '../MyProfileTabComponents/ManagePortfolioBox';

class AccountCard extends Component {
  render() {
    const {portfolioAccounts, itemId, insId} = this.props;
    const filteredHoldings = portfolioAccounts.holdings.filter(
      (holding) => holding.accountId == this.props.item.accountId,
    );

    if (!this.props) {
      return null;
    }
    return (
      <View style={style.institutionCard}>
        <View>
          <Text style={style.accountName}>{this.props.item.name}</Text>
        </View>

        {filteredHoldings.length > 1 ? (
          filteredHoldings.map((item, index) => (
            <ManagePortfolioBox
              key={index}
              item={item}
              InstitutionId={this.props.itemId}
              navigation={this.props.navigation}
              dropDown={this.props.dropDown}
            />
          ))
        ) : (
          <View>
            <Text style={style.loadingText}>
              You have no holdings in this account.
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    portfolioAccounts: state.user.portfolioAccounts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PortfolioAccounts: () => dispatch(PortfolioAccounts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountCard);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  institutionCard: {
    marginVertical: moderateScale(10),
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
  loadingText: {
    color: '#B8A0FF',
    fontSize: moderateScale(13),
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
});
