import { Text, View } from 'react-native'
import { CircularProgressBase } from 'react-native-circular-progress-indicator'

interface Props {
  level: number
}

const props = {
  activeStrokeWidth: 10,
  inActiveStrokeWidth: 10,
  inActiveStrokeOpacity: 0.2,
}

const RecursiveComponent = ({ level }: Props): JSX.Element => {
  if (level != 0) {
    return (
      <CircularProgressBase
        {...props}
        value={80}
        radius={100 - level * 10}
        activeStrokeColor={'#e84118'}
        inActiveStrokeColor={'#e84118'}
      >
        <RecursiveComponent level={level - 1} />
      </CircularProgressBase>
    )
  }
}

export default RecursiveComponent
