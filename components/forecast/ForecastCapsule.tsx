import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Forecast } from '../../models/Weather'
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia'
import { DEGREE_SYMBOL } from '../../utils/Constants'
import { convertDateTo12HrFormat } from '../../utils/DateHelper'

interface ForecastCapsuleProps {
    forecast: Forecast,
    width: number,
    height: number,
    radius: number

}

const ForecastCapsule = ({ forecast, width, height, radius }: ForecastCapsuleProps) => {
    const { date, icon, probability, temperature } = forecast
    const timeToDisplay = convertDateTo12HrFormat(date)

    return (
        <View style={{ width: width, height: height }}>
            <Canvas style={{ ...StyleSheet.absoluteFillObject }} >
                <RoundedRect x={0} y={0} width={width} height={height} r={radius} color="rgba(72, 49, 157,1)" >
                    <Shadow dx={1}
                        dy={1}
                        blur={0}
                        color={"rgba(255,255,255,0.25)"}
                        inner />

                </RoundedRect>
            </Canvas>
            <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 19 }} >
                <Text style={styles.timeText}>{timeToDisplay}</Text>
                <View>
                    <Image source={icon} style={{ width: width / 2, height: width / 2 }} />
                    <Text style={styles.probabilityText}>{probability}%</Text>
                </View>
                <Text style={styles.temperatureText}>{temperature}{DEGREE_SYMBOL}</Text>
            </View>

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
        textAlign: 'center',
    },
    temperatureText: {
        fontFamily: 'SF-Regular',
        fontSize: 20,
        lineHeight: 24,
        color: 'white',
        letterSpacing: 0.38
    }
})