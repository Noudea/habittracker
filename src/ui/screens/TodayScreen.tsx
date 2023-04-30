import { Text, ScrollView, Button, View, StyleSheet } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { observer } from 'mobx-react-lite'
import { habitStore } from '../../infrastructure/store/HabitStore'
import HabitCard from '../components/organisms/HabitCard'
import CreateHabitModal from '../components/organisms/CreateHabitModal'
import HabitDetailsModal from '../components/organisms/HabitDetailsModal'

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

  return (
    <BottomSheetModalProvider>
      <ScrollView style={styles.container}>
        <Text>Today Screen</Text>
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
