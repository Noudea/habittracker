import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo, useRef } from 'react'

const CreateHabitModal = forwardRef((props, ref) => {
  // variables
  const snapPoints = useMemo(() => ['100%', '100%'], [])

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome Create Habit 🎉</Text>
      </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default CreateHabitModal
