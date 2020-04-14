import React, { useState } from 'react'
import { View, Dimensions } from 'react-native'
import {
  Divider,
  ButtonGroup,
  Text,
  ListItem,
  Avatar,
} from 'react-native-elements'
import { groupBy } from 'lodash'
import { PieChart } from 'react-native-chart-kit'
import { Colors, lighten } from './../styles/colors'

const getRandomColor = () => {
  var o = Math.round,
    r = Math.random,
    s = 255
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  )
}

function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) +
        'k'
    : Math.sign(num) * Math.abs(num)
}

const GenderChart = ({ cases }) => {
  const byGender = groupBy(cases, 'ageGroup')
  const byGenderArray = []
  let index = 0
  for (const key in byGender) {
    if (byGender.hasOwnProperty(key)) {
      var count = byGender[key].length

      byGenderArray.push({
        name: key,
        count,
        color: lighten(Colors.primary, index * 10),
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      })
      index++
    }
  }

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    color: (opacity = 1) =>
      `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }

  const graphStyle = {
    ...chartConfig.style,
  }
  const buttons = ['Chart', 'Numbers']
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <View style={{ padding: 5 }}>
      <Text style={{ marginLeft: 10 }} h4>
        Gender
      </Text>
      <ButtonGroup
        containerBorderRadius={0}
        buttonStyle={{ margin: 0, padding: 0 }}
        containerStyle={{ margin: 0, padding: 0 }}
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
      />
      <View style={{ minHeight: 220 }}>
        {selectedIndex == 0 && (
          <PieChart
            data={byGenderArray}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            style={graphStyle}
            accessor="count"
          />
        )}
        {selectedIndex == 1 && (
          <>
            {byGenderArray.map((gender, i) => {
              return (
                <ListItem
                  containerStyle={{
                    padding: 5,
                    marginLeft: 7,
                    backgroundColor: 'transparent',
                  }}
                  contentContainerStyle={{
                    backgroundColor: 'transparent',
                  }}
                  key={i}
                  leftAvatar={
                    <Avatar
                      size="medium"
                      avatarStyle={{}}
                      titleStyle={{
                        fontSize: 14,
                        color: Colors.primary,
                      }}
                      title={kFormatter(gender.count)}
                    />
                  }
                  title={gender.name}
                />
              )
            })}
          </>
        )}
      </View>
    </View>
  )
}

export default GenderChart
