import { FlatList, RefreshControl, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native-paper';
import HistoryCard from '../../Components/historyCard';
import { onFavourite, onRemoveItem, onShare, readData } from '../../util/Misc';
import LottieAnimatedView from '../../Components/LottieAnimatedView';
import AdmobAds from '../../Components/AdmobAds';
import { BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const Favourite = ({ navigation }) => {
  const [data, setData] = useState(0)
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      onReadData()
    })

    return unsubscribe

  }, [navigation, onReadData, onFavourite])

  const onReadData = async () => {
    const result = await readData();
    let favData = result.filter(item => {
      let obj = JSON.parse(item[1])
      const { isFav } = obj
      if (isFav) {
        return item[0]
      }
    })
    setData(favData)
    setRefreshing(false)
  }

  const favCallback = async (id) => {
    let filterData = data.filter(val => {
      let Obj = JSON.parse(val[1])
      return val[0] !== id && Obj.isFav
    })
    setData(filterData)
  }


  const callback = async (id) => {
    let filterData = data.filter(val => {
      return val[0] !== id
    })
    setData(filterData)
  }


  const renderItem = ({ item }) => {
    const obj = JSON.parse(item[1])
    const { data, date, id, isFav } = obj
    return (
      obj.isFav &&
      <HistoryCard
        id={item[0]}
        data={data}
        date={date}
        onRemoveItem={async () =>
          await onRemoveItem(id, () => callback(id))
        }
        onShare={() => onShare(data)}
        onFavourite={async () =>
          await onFavourite(id, () => favCallback(id))
        }
        isFav={isFav}
        navigation={navigation}
      />
    )
  }

  return (
    <View style={styles.container}>
      {refreshing ? <ActivityIndicator /> : null}
      {Object.keys(data).length > 0 ?
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

export default Favourite

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {
    flex: 1
  }
})