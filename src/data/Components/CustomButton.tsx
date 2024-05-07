import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-paper'

const CustomButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
    const { colors } = useTheme()
    return (
        <TouchableOpacity
            style={[styles.btnStyle, { backgroundColor: colors.primary }]}
            onPress={onPress}
        >
            <Text variant='titleLarge' style={{ color: colors.surface }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    btnStyle: {
        marginVertical:12,
        height: 56,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
})