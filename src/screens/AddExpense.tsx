import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../data/Components/CustomButton'
import CustomTextField from '../data/Components/CustomTextField'
import { MultiSelect } from 'react-native-element-dropdown'

import Icons from 'react-native-vector-icons/MaterialIcons'
import ChipPicker from '../data/Components/ChipsPicker'
const AddExpense = () => {

  return (
    <View style={styles.container}>
      <CustomTextField label='Date' icon='date-range' />
      <CustomTextField label='Amount' icon='currency-rupee' keyboardType='number-pad' />
      {/* <MultiSelectField></MultiSelectField> */}
      <ChipPicker />
      <CustomButton title='Submit' onPress={() => { }} />
    </View>
  )
}

export default AddExpense

const styles = StyleSheet.create({
  container: {
    margin: 16
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
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 16,
    marginLeft: 8
  },
  selectedStyle: {
    borderRadius: 12,
  },
})

const MultiSelectField = () => {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [selected, setSelected] = useState<string[]>([]);
  const textStyle = { color: 'black' }
  return (
    <View>
      <MultiSelect
        style={styles.inputStyle}
        placeholderStyle={textStyle}
        selectedTextStyle={textStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={textStyle}
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={selected}
        onChange={item => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <Icons
            style={styles.icon}
            color="black"
            name="playlist-add-check"
            size={24}
          />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  )
}

