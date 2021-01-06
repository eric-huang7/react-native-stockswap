import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {SlideAreaChart} from 'react-native-slide-charts';
import {LinearGradient, Stop} from 'react-native-svg';

export default class PortfolioGraph extends Component {
  render() {
    const fillGradient = (props) => {
      return (
        <LinearGradient x1="40%" y1="0%" x2="40%" y2="100%" {...props}>
          <Stop stopColor={'#91f2b1'} offset="5%" stopOpacity="0.2" />
          <Stop stopColor="#4a334a" offset="100%" stopOpacity="0" />
        </LinearGradient>
      );
    };

    return (
      <View style={styles.container}>
        <SlideAreaChart
          data={this.props.graphData}
          yRange={this.props.range}
          width={Dimensions.get('window').width - 150}
          height={200}
          // width={300}
          height={100}
          style={{backgroundColor: '#2a334a'}}
          axisWidth={5}
          axisHeight={5}
          chartLineColor={'#91f2b1'}
          // chartLineColor={'lightgrey'}
          // chartPaddingTop={-47}
          throttleAndroid={true}
          // fillColor={'#2a334a'}
          renderFillGradient={fillGradient}
          alwaysShowIndicator={false}
          cursorProps={{
            displayCursor:false,
            // cursorLine: true,
            // cursorColor: 'black',
            // cursorMarkerWidth: 11,
            // cursorMarkerHeight: 15,
            // cursorBorderColor: 'black',
          }}
          paddingBottom={10}
          paddingLeft={3}
          //Y AXIS
          yAxisProps={{
            showBaseLine: false,
            verticalLineWidth: 0,
            horizontalLineWidth: 0,
            axisLabelAlignment: 'top',
            rotateAxisLabel: true,
            labelTopPadding: 0,

            //Set graph Y numbers
            numberOfTicks: 0,
            // markFirstLine: true,
            // hideMarkers: true,
            // interval:12,
          }}
          //TOOLTIP
          // toolTipProps={{
          //   displayTriangle: false,
          //   height: 50,
          //   fontSize: 14,
          //   borderRadius: 18,
          //   backgroundColor: '#8b64ff',

          //   // backgroundColor: '#2a334a',
          //   textStyles: [
          //     {
          //       color: 'white',
          //       // fontWeight:'700',
          //     },
          //     {color: 'white', fontSize: 14.1, fontWeight: '700'},
          //   ],
          //   toolTipTextRenderers: [
          //     ({scaleX, x}) => ({
          //       text: new Date(scaleX.invert(x)).toLocaleDateString('en-US', {
          //         hour: '2-digit',
          //         minute: 'numeric',
          //       }),
          //     }),
          //     ({scaleY, y}) => ({
          //       text: '$' + scaleY.invert(y).toFixed(2).toString(),
          //     }),
          //   ],
          // }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // margin: 12,
    // borderWidth: 1,

    flex: 1,
    // paddingBottom: 10,
    // backgroundColor: '#2a334a',
    // borderBottomWidth:1,
    // borderColor:'green',
    // padding:20
  },
});
