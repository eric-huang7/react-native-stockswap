import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import PortfolioGraph from './PortfolioGraph';
import BearIcon from '../../icons/BearIcon';
import BullIcon from '../../icons/BullIcon';
import {moderateScale} from '../../util/responsiveFont';

export default class UserPortfolioBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphData: [
        {x: 2, y: 10},
        {x: 3, y: 21},
        {x: 4, y: 32},
        {x: 5, y: 14},
        {x: 6, y: 4},
        {x: 7, y: 25},
      ],
      percent: '1.22',
      range: [5, 30],
      start: '',
      end: '',
    };
  }

  componentDidMount() {
    const {item} = this.props;
    //X and Y
    //X
    const xDates = item.dates.map((item) => new Date(item * 1000));
    //Y
    const yPrices = item.priceHistory;
    //X and Y data
    const xyData = xDates.map((stockDate, stockPrice) => {
      return {x: stockDate, y: yPrices[stockPrice]};
    });
    //Data periods
    // Data for week
    const weekData = xyData.slice(xyData.length - 7);
    //Data for month
    const monthData = xyData.slice(xyData.length - 31);
    //Week range of stock prices
    const weekRange = [
      Math.min(...yPrices.slice(yPrices.length - 7)),
      Math.max(...yPrices.slice(yPrices.length - 7)),
    ];

    //Info to display
    //Current stock price
    const currentPrice = yPrices[yPrices.length - 1];

    // Growth/Loss percentage
    const percentChange = (
      ((currentPrice - yPrices[yPrices.length - 7]) /
        yPrices[yPrices.length - 7]) *
      100
    ).toFixed(2);

    this.setState({
      graphData: weekData,
      range: weekRange,
      percent: percentChange,
    });
  }

  render() {
    const {item} = this.props;
    const {graphData, percent, range} = this.state;

    return (
      <SafeAreaView style={style.container}>
        <View style={style.symbolContainer}>
          <Text style={percent > 0 ? style.symbolGain : style.symbolLoss}>
            {item.symbol}
          </Text>
          <Text style={style.title}>{item.title}</Text>
          <Text style={style.price}>Price: ${item.price}</Text>
        </View>
        <View style={style.graphContainer}>
          <PortfolioGraph
            graphData={graphData}
            range={range}
            percent={percent}
          />
        </View>
        <View style={style.percentContainer}>
          {percent > 0 ? (
            <BullIcon style={style.icon} />
          ) : (
            <BearIcon style={style.icon} />
          )}
          <Text style={percent > 0 ? style.percentGain : style.percentLoss}>
            {percent}%
          </Text>
          <Text style={style.price}>Portfolio:</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#2a334a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: moderateScale(99),
  },
  icon: {
    alignSelf: 'flex-end',
  },
  symbolContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: moderateScale(4),
    paddingLeft: moderateScale(8),
    width: '100%',
    textAlign: 'left',
  },
  symbolGain: {
    color: '#71F59C',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  symbolLoss: {
    color: '#F66E6E',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  title: {
    color: 'lightgrey',
    fontSize: moderateScale(10),
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
  },
  price: {
    color: '#FFFFFF',
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
    fontSize: moderateScale(12),
  },
  percentContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: moderateScale(4),
    paddingRight: moderateScale(30),
    alignItems: 'flex-end',
    // width: '100%',
    // textAlign: 'left',
  },
  percentGain: {
    color: '#71F59C',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
  percentLoss: {
    color: '#F66E6E',
    fontFamily: 'Montserrat-Bold',
    fontSize: moderateScale(16),
    textAlign: 'left',
  },
});
