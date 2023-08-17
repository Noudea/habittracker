import ColorPick from '../atoms/ColorPick'
import { StyleSheet, View } from 'react-native'
import { useState } from 'react'

interface ListColorPickProps {
  colors: string[]
  selectedColor: string
  setColor: (color: string) => void
}

const ListColorPick = ({
  colors,
  setColor,
  selectedColor,
}: ListColorPickProps) => {
  // const [selectedColor, setSelectedColor] = useState('')

  const handlePress = (color: string) => {
    console.log('set color, ', color)
    setColor(color)
    // setSelectedColor(color)
  }

  return (
    <View style={styles.container}>
      {colors.map((color, index) => (
        <ColorPick
          onPress={() => {
            handlePress(color)
          }}
          key={index}
          color={color}
          selected={color === selectedColor}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
})

export default ListColorPick
