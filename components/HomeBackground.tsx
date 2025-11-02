import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Canvas, Rect } from '@shopify/react-native-skia'

const HomeBackground = () => {
    const { width, height } = useWindowDimensions()
    return (
        <Canvas style={{ flex: 1 }}>
            <Rect x={0} y={0} width={width} height={height} color="black" />
        </Canvas>
    )
}

export default HomeBackground

const styles = StyleSheet.create({})