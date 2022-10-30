import { FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';
import HistoryCard from '../../Components/historyCard';
import { onShare, onFavourite, onRemoveItem } from '../../util/Misc';

const Favourite = ({ navigation }) => {
  const [data, setData] = useState()
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      readData()
    })

    return unsubscribe

  }, [navigation])




  const readData = async () => {
    const keys = await AsyncStorage.getAllKeys()
    const result = await AsyncStorage.multiGet(keys)
    setData(result)
    setRefreshing(false)
  }

  const renderItem = ({ item }) => {
    const obj = JSON.parse(item[1])
    const isFav = obj.isFav
    return (
      isFav ?
        <HistoryCard
          id={item[0]}
          data={obj.data}
          date={obj.date}
          onRemoveItem={() => onRemoveItem(item[0])}
          onShare={() => onShare(obj.data)}
          onFavourite={() => onFavourite(item[0])}
          isFav={obj.isFav}
          navigation={navigation}
        />
        : null
    )
  }

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator /> : null}
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item[0]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={readData}
          />
        }
      />

    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {
    flex: 1
  }
})