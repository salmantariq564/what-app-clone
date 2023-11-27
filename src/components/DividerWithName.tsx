import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

interface DividerWithNameProps {
  name: string
}
const DividerWithName = ({ name }: DividerWithNameProps) => {
  return (
    <View style={styles.container}>
      <CustomText label={name} />
    </View>
  )
}

export default DividerWithName

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
  }
})