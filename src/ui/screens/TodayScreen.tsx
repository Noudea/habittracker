import {
  Text,
  ScrollView,
  Button,
  View,
  StyleSheet,
  TextInput,
} from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet'
import { observer } from 'mobx-react-lite'
import { habitStore } from '../../data/store/HabitStore'

const TodayScreen = observer((): JSX.Element => {
  const [name, setName] = useState('')
  const [daysPerWeek, setDaysPerWeek] = useState('')
  const [color, setColor] = useState('')
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null)
  // variables
  const snapPoints = useMemo(() => ['100%', '100%'], [])

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index: number) => {}, [])
  const handleCreateHabit = () => {
    const habit = {
      name,
      daysPerWeek: parseInt(daysPerWeek),
      startDate: new Date(),
      completionDates: [],
      color,
    }
    habitStore.createHabit(habit)
  }

  return (
    <BottomSheetModalProvider>
      <ScrollView>
        <Text>Today Screen</Text>
        <View style={styles.container}>
          <Button onPress={handlePresentModalPress} title="Present Modal" />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
              <TextInput
                placeholder={'name'}
                value={name}
                onChangeText={setName}
              />
              <TextInput
                placeholder={'numberperWeek'}
                keyboardType="numeric"
                value={daysPerWeek}
                onChangeText={setDaysPerWeek}
              />
              <TextInput
                placeholder={'color'}
                value={color}
                onChangeText={setColor}
              />
              <Button onPress={handleCreateHabit} title="Create Habit" />
            </View>
          </BottomSheetModal>
        </View>
      </ScrollView>
    </BottomSheetModalProvider>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default TodayScreen
