import { Text, ScrollView, Button, View, StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { observer } from 'mobx-react-lite'
import { habitStore } from '../../infrastructure/store/HabitStore'
import HabitCard from '../components/organisms/HabitCard'
import CreateHabitModal from '../components/organisms/CreateHabitModal'
import HabitDetailsModal from '../components/organisms/HabitDetailsModal'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'
import MultipleCircularProgress from '../components/organisms/MultipleCircularProgress'
import CircularProgress from '../components/organisms/MultipleCircularProgress'
import RecursiveComponent from '../components/organisms/RecursiveComponent'
import LineCalendar from '../components/organisms/LineCalendar'

const TodayScreen = observer((): JSX.Element => {
  const [name, setName] = useState('')
  const [occurrences, setOccurrences] = useState('')
  const [color, setColor] = useState('')

  // ref
  const createHabitModalRef = useRef<BottomSheetModal>(null)
  const habitDetailsModalRef = useRef<BottomSheetModal>(null)

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    createHabitModalRef.current?.present()
  }, [])

  const handlePresentModalHabitMenu = useCallback(() => {
    habitDetailsModalRef.current?.present()
  }, [])
  //send data to store
  const handleCreateHabit = () => {
    const habit = {
      name,
      startDate: new Date(),
      completionDates: [],
      color,
      occurrences: parseInt(occurrences),
    }
    habitStore.createHabit(habit)
    //TODO close modal
  }

  const habsTest = [
    {
      indexNbr: 0,
      color: '#e84118',
    },
    {
      indexNbr: 1,
      color: '#0800e6',
    },
    {
      indexNbr: 2,
      color: '#02e60f',
    },
  ]

  return (
    <BottomSheetModalProvider>
      <ScrollView style={styles.container}>
        <LineCalendar />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            marginBottom: 20,
          }}
        >
          <MultipleCircularProgress habits={habsTest} />
        </View>

        {/*<RecursiveComponent level={3} />*/}
        <Text>Today</Text>
        {habitStore.habits.map((habit, index) => (
          <HabitCard onLongPress={handlePresentModalHabitMenu} key={index} />
        ))}
        <Text>This week</Text>
        {habitStore.habits.map((habit, index) => (
          <HabitCard onLongPress={handlePresentModalHabitMenu} key={index} />
        ))}
        <View>
          <Button onPress={handlePresentModalPress} title="Present Modal" />
          <CreateHabitModal ref={createHabitModalRef} />
          <HabitDetailsModal ref={habitDetailsModalRef} />
        </View>
      </ScrollView>
    </BottomSheetModalProvider>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
})

export default TodayScreen
