import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'

import { useState } from 'react'

interface Props {
  onLongPress: () => void
}

const HabitCard = ({ onLongPress }: Props): JSX.Element => {
  const [radiusValue, setRadiusValue] = useState(25)
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
      height: 80,
    },
    habitName: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    informations: {
      width: '70%',
    },
    progressContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    detailsContainer: {
      flexDirection: 'row',
    },
  })

  return (
    <TouchableOpacity
      onPress={() => {
        console.log('Short press')
      }}
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
        <CircularProgressBase
          activeStrokeWidth={10}
          inActiveStrokeWidth={10}
          inActiveStrokeOpacity={0.2}
          initialValue={0}
          value={radiusValue}
          radius={25}
          activeStrokeColor={'#e84118'}
          inActiveStrokeColor={'#e84118'}
        >
          <Text>+</Text>
          {/*<Button*/}
          {/*  title={'25%'}*/}
          {/*  onPress={() => {*/}
          {/*    console.log('button pressed')*/}
          {/*  }}*/}
          {/*/>*/}
        </CircularProgressBase>
      </View>
    </TouchableOpacity>
  )
}

export default HabitCard
