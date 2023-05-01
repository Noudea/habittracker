import { CircularProgressBase } from 'react-native-circular-progress-indicator'

interface Props {
  level: number
  habsTest: any
}

const props = {
  activeStrokeWidth: 10,
  inActiveStrokeWidth: 10,
  inActiveStrokeOpacity: 0.2,
}

const MultipleCircularProgress = ({ level, habsTest }: Props): JSX.Element => {
  if (habsTest.length != 0) {
    console.log('habsTest', habsTest)
    console.log('habsTest', habsTest.length)
    // const last = habsTest.pop()

    habsTest.splice(-1, 1)
    return (
      <CircularProgressBase
        {...props}
        value={80}
        radius={100 - level * 10}
        activeStrokeColor={'#e84118'}
        inActiveStrokeColor={'#e84118'}
      >
        <MultipleCircularProgress level={level - 1} habsTest={habsTest} />
      </CircularProgressBase>
    )
  }
}

export default MultipleCircularProgress
