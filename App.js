import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { Provider } from 'react-native-paper'

export default function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  )
}
