import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ArcComponent from './elements/ArcComponent'
import useApplicationDimensions from '../../hooks/useApplicationDimensions';

const WeatherTabBar = () => {
    const TabbarHeight = 88;
    const { width, height } = useApplicationDimensions();
    return (
        <View style={{
            height: TabbarHeight, ...StyleSheet.absoluteFillObject,
            top: height - TabbarHeight,
        }}>
            <ArcComponent height={TabbarHeight} width={width} />
        </View>
    )
}

export default WeatherTabBar

const styles = StyleSheet.create({})