import CalendarStrip from 'react-native-calendar-strip'
import { StyleSheet, View, Text } from 'react-native'
import CustomDayComponent from './CustomDayComponent'

const LineCalendar = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
  })

  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable
        style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
        calendarColor={'white'}
        calendarHeaderStyle={{ color: 'black' }}
        dateNumberStyle={{ color: 'black' }}
        dateNameStyle={{ color: 'black' }}
        iconContainer={{ flex: 0.1 }}
        dayComponent={({ date }) => {
          return <CustomDayComponent date={date} />
        }}
      />
    </View>
  )
}

export default LineCalendar
