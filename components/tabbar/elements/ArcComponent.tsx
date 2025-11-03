import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Canvas, LinearGradient, Path, vec } from '@shopify/react-native-skia';
interface ArcComponentsProps {
    height: number;
    width: number
}
const ArcComponent = ({ height, width }: ArcComponentsProps) => {
    const arcPath = `M 0 0 Q ${width / 2} ${height / 2} ${width} 0 L ${width} ${height}
    L 0 ${height} Zr`;
    return (
        <Canvas style={{ height: height, width: width }}>
            <Path path={arcPath} >
                <LinearGradient
                    start={vec(width / 2, 0)}
                    end={vec(width / 2, height)}
                    colors={['rgba(58,58,106,1)', 'rgba(37,36,76,01)']}>

                </LinearGradient>

            </Path>
        </Canvas>
    )
}

export default ArcComponent

const styles = StyleSheet.create({})