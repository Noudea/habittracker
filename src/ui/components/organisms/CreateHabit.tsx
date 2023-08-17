import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import { useState } from 'react'
import ListColorPick from '../molecules/ListColorPick'
import SelectedColorMarker from '../atoms/SelectedColorMarker'
import theme from '../../theme/theme'
import CustomInput from '../atoms/CustomInput'

const CreateHabit = () => {
  const [color, setColor] = useState<string>('#FF4081')

  const [habitToCreate, setHabitToCreate] = useState({
    name: '',
    occurences: '',
  })

  const onChangeName = (text: string) => {
    setHabitToCreate({ ...habitToCreate, name: text })
  }

  const onChangeOccurences = (text: string) => {
    setHabitToCreate({ ...habitToCreate, occurences: text })
  }

  const handlePress = (color: string) => {
    console.log('set color, ', color)
    setColor(color)
  }

  const styles = StyleSheet.create({
    createHabitContainer: {
      padding: 16,
    },
    input: {
      height: 50,
      padding: 10,
      borderWidth: 1,
      borderColor: theme.light.borderColor,
      borderRadius: 10,
    },
  })

  return (
    <ScrollView style={styles.createHabitContainer}>
      <View>
        <Text>Habit name:</Text>
        <CustomInput onChange={onChangeName} value={habitToCreate.name} />
        <Text>Occurences:</Text>
        <CustomInput onChange={onChangeOccurences} value={habitToCreate.name} />
        <Text>Count:</Text>
      </View>
      <View>
        <Text>Habit color :</Text>
        <SelectedColorMarker color={color} />
        <ListColorPick
          setColor={handlePress}
          selectedColor={color}
          colors={theme.light.habitColors}
        />
      </View>
    </ScrollView>
  )
}

export default CreateHabit
