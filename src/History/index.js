import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native-paper';
import HistoryCard from '../../Components/historyCard';
import LottieAnimatedView from '../../Components/LottieAnimatedView';
import { GREEN_COLOR } from '../../res/colors';
import { onShare, onFavourite, onRemoveItem, readData } from '../../util/Misc';
import AdmobAds from '../../Components/AdmobAds'
import { BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const History = ({ navigation }) => {
  const [data, setData] = useState(0)
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onReadData()
    })

    return unsubscribe
  }, [navigation, onReadData, onFavourite])

  const favCallback = async (id) => {
    let result = await readData();
    setData(result)
    setRefreshing(false)
  }

  const onReadData = async () => {
    let result = await readData();
    setData(result)
    setRefreshing(false)
  }


  const callback = async (id) => {
    const filterData = data.filter(val => {
      return val[0] !== id
    })
    setData(filterData)
  }

  const renderItem = ({ item }) => {
    const Obj = JSON.parse(item[1])
    const { id, data, date, isFav } = Obj
    return (
      <HistoryCard
        id={id}
        data={data}
        date={date}
        onRemoveItem={async () => {
          await onRemoveItem(id, () => callback(id))
        }}
        onShare={() => onShare(data)}
        onFavourite={() => onFavourite(id, () => favCallback())}
        isFav={isFav}
        navigation={navigation}
      />
    )
  }

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator
        color={GREEN_COLOR}
        size={'large'} /> : null}
      {Object.entries(data).length > 0 ?
        <FlatList
          style={styles.flatList}
          data={data}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onReadData}
            />
          }
        />
        :
        <LottieAnimatedView
          source={require("../../assets/empty.json")}
        />
      }
      <View style={{ position: 'absolute', bottom: 0 }}>
        <AdmobAds
        id={TestIds.BANNER}
        bannerSize={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        />
      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {
    flex: 1
  }
})