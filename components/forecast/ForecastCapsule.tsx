import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Forecast } from '../../models/Weather'
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia'
import { DEGREE_SYMBOL } from '../../utils/Constants'

interface ForecastCapsuleProps {
    forecast: Forecast,
    width: number,
    height: number,
    radius: number

}

const ForecastCapsule = ({ forecast, width, height, radius }: ForecastCapsuleProps) => {
    const { date, icon, probability, temperature } = forecast
    return (
        <View style={{ width: width, height: height }}>
            <Canvas style={{ flex: 1 }} >
                <RoundedRect x={0} y={0} width={width} height={height} r={radius} color="rgba(72, 49, 157,1)" >
                    <Shadow dx={1}
                        dy={1}
                        blur={0}
                        color={"rgba(255,255,255,0.25)"}
                        inner />

                </RoundedRect>
                <View >
                    <Text style={styles.timeText}>{date.toString()}</Text>
                    <View>
                        <Image source={icon} style={{ width: width / 2, height: width / 2 }} />
                        <Text style={styles.probabilityText}>{probability}</Text>
                    </View>
                    <Text style={styles.temperatureText}>{temperature}{DEGREE_SYMBOL}</Text>
                </View>
            </Canvas>
        </View>
    )
}

export default ForecastCapsule

const styles = StyleSheet.create({
    timeText: {
        fontFamily: 'SF-Semibold',
        fontSize: 15,
        lineHeight: 20,
        color: 'white',
        letterSpacing: -0.5
    },
    probabilityText: {
        fontFamily: 'SF-Semibold',
        fontSize: 13,
        lineHeight: 18,
        color: '#40CBD8',
    },
    temperatureText: {
        fontFamily: 'SF-Regular',
        fontSize: 20,
        lineHeight: 24,
        color: 'white',
        letterSpacing: 0.38
    }
})