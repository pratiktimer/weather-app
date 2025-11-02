import { Image, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';

const HomeBackground = () => {
    const { width, height } = useWindowDimensions();

    return (
        <>
            {/* Gradient background */}
            <Canvas style={StyleSheet.absoluteFill}>
                <Rect x={0} y={0} width={width} height={height}>
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(width, height)}
                        colors={['#2E335A', '#1C1B33']}
                    />
                </Rect>
            </Canvas>

            {/* Main background image */}
            <ImageBackground
                source={require('../assets/home/Background.png')}
                resizeMode="cover"
                style={[StyleSheet.absoluteFill, styles.background]}
            >
                {/* Foreground house image */}
                <Image
                    source={require('../assets/home/House.png')}
                    resizeMode="contain"
                    style={[
                        styles.house,
                        { width: width * 1.2, height: height * 0.5 },
                    ]}
                />
            </ImageBackground>
        </>
    );
};

export default HomeBackground;

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    house: {
        position: 'absolute',
        bottom: '10%',
    },
});
