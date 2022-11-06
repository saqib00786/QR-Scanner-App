import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { Provider } from 'react-native-paper'
import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  return (
    <Provider>
      <RootSiblingParent>
        <Navigation />
      </RootSiblingParent>
    </Provider>
  )
}
