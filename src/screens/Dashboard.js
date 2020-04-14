import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {
  Text,
  Card,
  ButtonGroup,
} from 'react-native-elements'
import { fetchConfirmedCasesStart } from './../features/confirmed-cases/action'
import GenderChart from './../components/GenderChart'

const Dashboard = () => {
  const dispatch = useDispatch()

  const { cases } = useSelector(
    (state) => state.confirmedCases
  )

  const buttons = [
    'Toronto',
    'GTA',
    'Missisauga',
    'Ontarioa',
    'Ontarioa',
    'Ontarioa',
    'Ontarioa',
    'asdas',
  ]
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    dispatch(fetchConfirmedCasesStart({}))
  }, [])

  return (
    <View>
      <View style={styles.headerStyle}>
        <Text h3>Covid 19 Statistics</Text>
        <Text h5>Contry - Canada</Text>
        <Text h5>Province - Ontario</Text>
      </View>

      <ButtonGroup
        onPress={setSelectedIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
      />
      <GenderChart cases={cases} />
      <Card>
        <FlatList
          data={cases}
          renderItem={({ item }) => (
            <>
              <Text>
                {item.id} ---- {item.acquisitionInfo}
                -- {item.phuCity}
              </Text>
            </>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    padding: 10,
  },
  genderChartStyle: {
    fontSize: 8,
    padding: 0,
    margin: 0,
  },
})

export default Dashboard
