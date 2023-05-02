import { CircularProgressBase } from 'react-native-circular-progress-indicator'

const props = {
  activeStrokeWidth: 10,
  inActiveStrokeWidth: 10,
  inActiveStrokeOpacity: 0.2,
}

const MultipleCircularProgress = ({ habits }: { habits: any }): JSX.Element => {
  if (habits.length != 0) {
    const currentHabit = habits.pop()
    //inverse = habits.shift()
    return (
      <CircularProgressBase
        {...props}
        value={80}
        radius={100 - habits.length * 10}
        activeStrokeColor={currentHabit.color}
        inActiveStrokeColor={currentHabit.color}
      >
        <MultipleCircularProgress habits={habits} />
      </CircularProgressBase>
    )
  }
}

export default MultipleCircularProgress
