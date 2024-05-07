import { KeyboardTypeOptions, StyleSheet } from 'react-native'
import React from 'react'
import { Text, TextInput, useTheme } from 'react-native-paper'

const CustomTextField = ({ label, icon, keyboardType }: { label: string, icon: string, keyboardType?: KeyboardTypeOptions }) => {
    const { colors } = useTheme();
    return (
        <TextInput
            style={{ marginVertical: 4 }}
            label={label}
            mode='outlined'
            keyboardType={keyboardType}
            outlineStyle={{ borderRadius: 12 }}
            left={<TextInput.Icon icon={icon} color={colors.primary}></TextInput.Icon>}
        />
    )
}

export default CustomTextField

const styles = StyleSheet.create({})