import { StyleSheet, View } from 'react-native'
import { Text, useTheme } from 'react-native-paper'
import React, { useState } from 'react'
import CustomTextField from '../data/Components/CustomTextField'
import CustomButton from '../data/Components/CustomButton'
import { Dropdown } from 'react-native-element-dropdown'
import Icons from 'react-native-vector-icons/MaterialIcons'

const AddIncome = () => {

    return (
        <View style={styles.container}>
            <CustomTextField label='Date' icon='date-range' />
            <DropdownField></DropdownField>
            <CustomTextField label='Amount' icon='currency-rupee' keyboardType='number-pad' />
            <CustomTextField label='Description' icon='description' />
            <CustomButton title='Submit' onPress={() => { }} />
        </View>
    )
}

export default AddIncome

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    icon: {
        marginRight: 16,
        marginLeft: 8
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 8,
        top: 4,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 11,
    },
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 12,
        marginBottom: 4,
        color: 'black',
        padding: 8,
        borderRadius: 12,
        backgroundColor: 'white',
    }
})



const DropdownField = () => {
    const data = [
        { "id": "1", 'name': 'Cash' },
        { "id": "2", 'name': 'Online' },
    ];
    const { colors } = useTheme();
    const [value, setValue] = useState("");
    const [isFocus, setIsFocus] = useState(false);

    const textStyle = { color: 'black' }
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: colors.primary }]}>
                    Source
                </Text>
            );
        }
        return null;
    };

    return (
        <View>
            {renderLabel()}
            <Dropdown
                labelField='name'
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.id);
                    setIsFocus(false);
                }}
                valueField={'id'}
                data={data}
                mode='default'
                placeholder='Select Source'
                placeholderStyle={textStyle}
                itemTextStyle={textStyle}
                selectedTextStyle={textStyle}
                style={styles.inputStyle}
                renderLeftIcon={() => (
                    <Icons
                        style={styles.icon}
                        color={colors.primary}
                        name="source"
                        size={24}
                    />
                )}
            ></Dropdown>
        </View>
    )
}