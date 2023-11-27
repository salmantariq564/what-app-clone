import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatusBox from '../components/StatusBox'
import DividerWithName from '../components/DividerWithName'
import { userList } from '../utils/constants'
const StatusScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBox />
      <DividerWithName name='Recent updates' />
      <FlatList

        data={userList}
        renderItem={({ item }) => <StatusBox status={item} />}
        style={{ backgroundColor: 'white' }}
      />
    </View>
  )
}

export default StatusScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})