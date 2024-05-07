import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Chip, useTheme } from 'react-native-paper';

const ChipPicker = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState('');
    const [showMoreTags, setShowMoreTags] = useState(true);
    const { colors } = useTheme();
    const tagSuggestionList = ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag3', 'Tag4', 'Tag5'];

    const handleTagToggle = (tag: string) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter((item) => item !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
        setShowMoreTags(true);
    };

    const addNewTag = () => {
        if (tagInput.trim() !== '') {
            setSelectedTags([...selectedTags, tagInput]);
            setTagInput('');
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <ScrollView horizontal>
                    {tagSuggestionList.map((tag, index) => (
                        <Chip
                            mode='outlined'
                            style={styles.chipStyle}
                            key={index}
                            selected={selectedTags.includes(tag)}
                            onPress={() => handleTagToggle(tag)}
                        >
                            {tag}
                        </Chip>
                    ))}
                </ScrollView>

            </View>
            <View>
                <TextInput
                    style={{ marginVertical: 8 }}
                    label="Add new"
                    value={tagInput}
                    mode='outlined'
                    outlineStyle={{ borderRadius: 12 }}
                    onChangeText={(text) => setTagInput(text)}
                    right={<TextInput.Icon icon="add" onPress={addNewTag} />}
                    left={<TextInput.Icon icon='description' color={colors.primary}></TextInput.Icon>}
                />
            </View>
        </View>
    );
};

export default ChipPicker;
const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 8,
        marginTop: 8
    },
    chipStyle: {
        padding: 4,
        marginHorizontal: 4
    }
})
