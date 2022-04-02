

import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import dummyContacts from '../../assets/VideoCallAssets/data/contacts.json';



const ItemList = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

    // const GetDetails = (item) => {
    //     navigation.navigate('ItemDetails');
    //     console.log(item);
    // };

    useEffect(() => {
        const newContacts = dummyContacts.filter(contact => contact.user_display_name.toLocaleLowerCase().includes(searchText.toLowerCase()),);
        setFilteredContacts(newContacts);
    }, [searchText])

    const ListGenerator = (item) => {
        return(
            <Pressable onPress={() => {
                navigation.navigate('ItemDetails', {itemsInfo: item});
            }} style={{...styles.shadow, flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{ ...styles.item, color: '#000' ,textTransform:'capitalize' }}>{item.user_display_name}</Text>
                {/* <Text style={{ ...Styles.item, color: '#000' }}>{item.user_id}</Text> */}
                <Text style={{ ...styles.item, color: '#000', }}>{item.price}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.page}>
                 <View style={styles.separetor} />
                <View style={styles.itemHeader}>
                    <Text style={styles.headerStyle}>Item Name</Text>
                    <Text style={styles.headerStyle}>Item Price</Text>
                </View>
                <View style={styles.separetor} />
            {/* <TextInput style={styles.searchBox} placeholder='Search here' value={searchText} onChangeText={setSearchText} /> */}
            <FlatList
            // style={{paddingHorizontal:15}}
                data={filteredContacts}
                renderItem={({ item }) => ListGenerator(item)}
                // ItemSeparatorComponent={() => <View style={styles.separetor} />}
                scrollIndicatorInsets={{right:1}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        padding: 1,
    },
    item: {
        fontSize: 16,
        marginVertical: 8

    },
    separetor: {
        width: '100%',
        height: 1.4,
        backgroundColor: '#b3b3b3'
    },
    searchBox: {
        backgroundColor: "#ebebeb",
        textAlign: 'center',
        borderRadius: 30,
        height: 35
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 7,
        paddingHorizontal: 15
    },
    headerStyle: {
        fontSize: 16,
        fontWeight: '500'
    },
    shadow: {
    paddingHorizontal:15,
    paddingVertical: 4,
    margin: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    elevation: 1,
      },
});

export default ItemList;