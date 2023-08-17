import { StyleSheet, View, Text } from 'react-native'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'
import { getFirstLetterOfDate } from '../../../utils/date'

const CustomDayComponent = ({ date }: any): JSX.Element => {
  // console.log(date)
  const firstLetterOfWeekDay = getFirstLetterOfDate(date)

  return (
    <View style={styles.container}>
      <CircularProgressBase
        activeStrokeWidth={3}
        inActiveStrokeWidth={3}
        inActiveStrokeOpacity={0.2}
        value={80}
        radius={16}
        activeStrokeColor="#e84118"
        inActiveStrokeColor="#e84118"
      >
        <Text style={styles.dayNumber}>{firstLetterOfWeekDay}</Text>
      </CircularProgressBase>
      <View style={styles.currentDateDot} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
  },
  dayNumber: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  currentDateDot: {
    marginTop: 5,
    backgroundColor: '#e84118',
    width: 6,
    height: 6,
    borderRadius: 3,
  },
})

export default CustomDayComponent
