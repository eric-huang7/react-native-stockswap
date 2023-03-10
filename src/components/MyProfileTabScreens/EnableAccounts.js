import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {PortfolioAccounts} from '../../actions/profile';
import EnableAccountsCard from './EnableAccountsCard';
import {moderateScale} from '../../util/responsiveFont';
import {PlaidAccountStatus} from '../../actions/profile';

class EnableAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAccounts: [],
      accountStatus: [],
    };
  }
  componentDidMount() {
    this.setState({
      newAccounts: this.props.newPlaidAccount,
    });
 
    this.setState({
      accountStatus: this.props.newPlaidAccount.map((account) => {
        if(account.subtype == "money+market"){
        return {accountId: account.id, status: 'enabled'}
        }
      else {
       return{ accountId: account.id, status: 'disabled'}}
      }),
    });
  
 
  }
  accountFlag = (id, enabled) => {
    this.setState({
      accountStatus: this.state.accountStatus.map((account) => {
        if (account.accountId === id) {
          enabled
            ? (account.status = 'enabled')
            : (account.status = 'disabled');
        }
        return account;
      }),
    });
  };

  render() {
    const sorting = [...this.state.newAccounts].sort(function(x,y){ return x.subtype == 'money+market' ? -1 : y.subtype == 'money+market' ? 1 : 0; });

    if (!this.props.newPlaidAccount) {
      return null;
    }
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <View style={{paddingHorizontal: moderateScale(12)}}>
            <Text style={style.header}> {this.props.newInstitution.name}</Text>

            {sorting.map((item) => (
              <EnableAccountsCard
                key={item.id}
                item={item}
                accountFlag={this.accountFlag.bind(this)}
              />
            ))}
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() =>
            this.props.PlaidAccountStatus({
              accounts: this.state.accountStatus,
            })
          }>
          <Text style={style.publishButton}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newPlaidAccount: state.user.newPlaidAccount,
    newInstitution: state.user.newInstitution,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PlaidAccountStatus: (input) => dispatch(PlaidAccountStatus(input)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EnableAccounts);

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a334a',
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: moderateScale(30),
    textAlign: 'center',
    marginTop: moderateScale(14),
    marginBottom: moderateScale(12),
  },
  publishButton: {
    alignSelf: 'center',
    backgroundColor: '#8b64ff',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(20),
    width: moderateScale(160),
    borderRadius: moderateScale(6),
    fontSize: moderateScale(14),
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 14,
    marginBottom: 10,
  },
});
