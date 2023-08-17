import { StyleSheet, Text, View } from 'react-native'

const SelectedColorMarker = ({ color }: { color: string }) => {
  const styles = StyleSheet.create({
    selectedColor: {
      flex: 1,
      height: 60,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color,
      marginBottom: 16,
    },
    selectedColorText: {
      color: 'white',
      fontWeight: 'bold',
    },
  })

  return (
    <View style={styles.selectedColor}>
      <Text style={styles.selectedColorText}>{color}</Text>
    </View>
  )
}

export default SelectedColorMarker
