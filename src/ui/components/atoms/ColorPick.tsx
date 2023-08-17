import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

interface Props {
  color: string
  selected: boolean
  onPress: () => void
}

const ColorPick = ({ color, selected, onPress }: Props) => {
  const styles = StyleSheet.create({
    colorPick: {
      backgroundColor: color,
      height: 48,
      width: 48,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onPress()
      }}
    >
      <View style={styles.colorPick}>
        {selected && <Icon name="check" size={24} color="white" />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ColorPick
