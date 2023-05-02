import { CircularProgressBase } from 'react-native-circular-progress-indicator'

const CustomDayComponent = ({ date }: any): JSX.Element => {
  console.log(date)
  return (
    <CircularProgressBase
      activeStrokeWidth={5}
      inActiveStrokeWidth={5}
      inActiveStrokeOpacity={0.2}
      value={80}
      radius={16}
      activeStrokeColor="#e84118"
      inActiveStrokeColor="#e84118"
    />
  )
}

export default CustomDayComponent
