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
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          height: 70,
          marginTop: 0,
        }}
        innerStyle={{ height: 70, flex: 1 }}
        dayComponentHeight={70}
        calendarColor={'white'}
        calendarHeaderStyle={{ color: 'black' }}
        dateNumberStyle={{ color: 'black' }}
        dateNameStyle={{ color: 'black' }}
        iconContainer={{ flex: 0.1 }}
        leftSelector={[]}
        rightSelector={[]}
        // markedDates={[
        //   {
        //     date: new Date('2023-04-24T10:00:00.000Z'),
        //     dots: [
        //       {
        //         color: '#e84118',
        //       },
        //     ],
        //   },
        // ]}
        dayComponent={({ date }) => {
          return <CustomDayComponent date={date} />
        }}
      />
    </View>
  )
}

export default LineCalendar
