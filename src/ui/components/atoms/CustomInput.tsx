import { StyleSheet, TextInput } from 'react-native'
import theme from '../../theme/theme'

interface CustomInputProps {
  onChange: (value: string) => void
  value: string
}

const CustomInput = ({ onChange, value }: CustomInputProps) => {
  const styles = StyleSheet.create({
    input: {
      height: 50,
      padding: 10,
      borderWidth: 1,
      borderColor: theme.light.borderColor,
      borderRadius: 10,
    },
  })
  return (
    <TextInput
      keyboardType={'number-pad'}
      style={styles.input}
      onChangeText={onChange}
      value={value}
    />
  )
}

export default CustomInput
