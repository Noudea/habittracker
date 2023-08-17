import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { forwardRef, useCallback, useMemo, useRef } from 'react'

interface BottomModalProps {
  snapPoints: string[]
  content: React.ReactNode
}

const BottomModal = forwardRef((props: BottomModalProps, ref) => {
  // variables

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={props.snapPoints}
      // onChange={handleSheetChanges}
    >
      {props.content}
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

export default BottomModal
