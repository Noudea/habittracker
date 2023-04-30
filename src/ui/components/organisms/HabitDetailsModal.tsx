import React, { forwardRef, useCallback, useMemo } from 'react'
import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { StyleSheet, Text, View } from 'react-native'

const HabitDetailsModal = forwardRef((props, ref) => {
  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.4}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  )
  const habitModalSnapPoints = useMemo(() => ['40%', '40%'], [])

  return (
    <BottomSheetModal
      // // add bottom inset to elevate the sheet
      // bottomInset={20}
      // // set `detached` to true
      // detached={true}
      backdropComponent={renderBackdrop}
      ref={ref}
      index={1}
      snapPoints={habitModalSnapPoints}
      // onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome Options 🎉</Text>
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

export default HabitDetailsModal
