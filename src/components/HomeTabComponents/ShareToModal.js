import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {moderateScale} from '../../util/responsiveFont';

export default class ShareToModal extends Component {
  render() {
    const {shareModal, onClose} = this.props;
    return (
      <View style={style.shareToContainer}>
        <TouchableOpacity onPress={onClose}>
          <Text style={style.closeButton}>Close</Text>
        </TouchableOpacity>
        <Text style={style.optionTextHeader}>Share to...</Text>
        <View style={style.innerReportContainer}>
          <Text style={style.optionText}>Option 1</Text>
          <Text style={style.optionText}>Option 2</Text>
          <Text style={style.optionText}>Option 3</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  shareToContainer: {
    flex: 1,
    marginTop: moderateScale(400),
    backgroundColor: '#3e4d6c',
    borderRadius: moderateScale(20),
    padding: moderateScale(14),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  innerReportContainer: {
    marginTop: moderateScale(30),
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '50%',
  },
  closeButton: {
    color: '#B8A0FF',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(18),
  },
  optionTextHeader: {
    color: 'white',
    fontSize: moderateScale(14),
    marginHorizontal: moderateScale(12),
    paddingVertical: moderateScale(2),
    fontFamily: 'Montserrat-Medium',
  },
  optionText: {
    color: 'white',
    fontSize: moderateScale(12),
    marginHorizontal: moderateScale(12),
    paddingVertical: moderateScale(2),
    fontFamily: 'Montserrat-Medium',
  },
});
