import React from 'react'
import { useRef } from 'react'
import { View, TextInput, Text, Pressable } from 'react-native'
const InputSearch = () => {
    const searchRef = useRef<TextInput>(null)

    const handleSearch = () => {
        if (searchRef.current) {
            searchRef.current.focus()
        } else {
            console.error('searchRef.current is null')
        }
    }

  return (
    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'space-between' }}>
        <TextInput ref={searchRef} style={{ flex: 1, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, borderRadius: 5 }} placeholder='Search' />
        <Pressable onPress={handleSearch}>
            <Text>Search</Text>
        </Pressable>
    </View>
  )
}

export default InputSearch