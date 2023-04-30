import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useState } from 'react'

const HabitCard = ({ onLongPress }): JSX.Element => {
  const OpenModalHabitOptions = () => {
    console.log('onLongPRess')
    onLongPress()
  }

  const styles = StyleSheet.create({
    container: {
      // backgroundColor: 'red',
      padding: 10,
      borderColor: '#dadada',
      borderWidth: 1,
      borderRadius: 10,
      flexDirection: 'row',
      marginBottom: 10,
    },
    habitName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    informations: {
      width: '70%',
    },
    progressContainer: {
      width: '30%',
    },
    detailsContainer: {
      flexDirection: 'row',
    },
  })

  return (
    <TouchableOpacity
      onPress={() => console.log('Short press')}
      onLongPress={() => {
        OpenModalHabitOptions()
      }}
      delayLongPress={500}
      style={styles.container}
    >
      <View style={styles.informations}>
        <Text style={styles.habitName}>TodayHabit</Text>
        <View style={styles.detailsContainer}>
          <Text>Days of Week</Text>
          <Text>0/3</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <Text>RoundIcon</Text>
      </View>
    </TouchableOpacity>
  )
}

export default HabitCard
