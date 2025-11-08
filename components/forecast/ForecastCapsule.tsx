import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Forecast } from '../../models/Weather'
import { Canvas, RoundedRect, Shadow } from '@shopify/react-native-skia'

interface ForecastCapsuleProps {
    forecast: Forecast,
    width: number,
    height: number,
    radius: number

}

const ForecastCapsule = ({ forecast, width, height, radius }: ForecastCapsuleProps) => {
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
            </Canvas>
        </View>
    )
}

export default ForecastCapsule

const styles = StyleSheet.create({})