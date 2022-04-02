import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const ItemDetails = ({ route }) => {

    let { itemsInfo } = route.params;

    return (
        <SafeAreaView>
            <ScrollView style={styles.page}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, paddingHorizontal: 10, }}>
                    <Text >31 March 2022 | 10:27 PM</Text>
                    <Text> <Text style={{ fontWeight: 'bold' }}>Order Total:</Text> KWD 40.000 </Text>
                </View>

                <View style={styles.separetor} />
                <View style={styles.itemHeader}>
                    <Text style={styles.headerStyle}>Item Name</Text>
                    <Text style={styles.headerStyle}>Price</Text>
                </View>
                <View style={styles.separetor} />
                <View style={styles.itemContainer}>

                    <Image source={{ uri: itemsInfo.user_photo }}
                        style={{ height: windowHeight / 5.3, width: windowWidth / 3, backgroundColor: 'transparent', resizeMode: 'contain' }} />

                    <View style={{ width: windowWidth / 3, paddingLeft: 5, alignItems: 'center', paddingVertical: 10 }}>
                        <Text style={styles.itemNameStyle}>{itemsInfo.user_display_name}</Text>
                        <Text> By BkFlowers</Text>
                        <View style={{ marginTop: 'auto' }}>
                            <Text>🗓 01 apr 2022</Text>
                            <Text><Text style={{ fontSize: 20 }} >⏲</Text> 10:00 - 14:00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: windowWidth / 3, alignItems: 'center', }}>
                        <Text style={styles.itemPriceStyle}>{`${itemsInfo.price}.000`}</Text>
                    </View>
                </View>

                <View style={styles.infoDetail}>
                    {/* Occation data will be bellow */}
                    <Text style={styles.infoHeader}>Occasion</Text>
                    <Text style={styles.infoText}>anniversary</Text>

                    {/* quantity section */}
                    <Text style={styles.infoHeader}>Quantity</Text>
                    <Text style={styles.infoText}>1</Text>

                    {/* card message section */}
                    <Text style={styles.infoHeader}>Card Message</Text>
                    <Text style={styles.infoText}>
                        To my lovely wife,
                        Happy anniversary and to many more years together, I love you with all my heart.
                    </Text>
                    <View style={styles.sizedBox} />
                    <View style={styles.sizedBox} />
                    <View style={styles.separetor} />

                    {/* deliver section */}
                    <Text style={styles.infoHeader}>Delivery Address</Text>
                    <Text style={styles.infoText}>
                        Salam / Block: Block 7 / Street: 707 Street / House: 18 / Recipient name: Amani Al Adsani / Recipient number: +965-94069044
                    </Text>

                    {/* payment details here */}
                    <Text style={styles.infoHeader}>Payment details</Text>

                    <Text style={styles.infoText}> Payment method: KNET  </Text>
                    <Text style={styles.infoText}> Payment ID: 101202209027413646 </Text>
                    <Text style={styles.infoText}> Track ID: 31032022222705646 </Text>
                    <Text style={styles.infoText}> Reference ID: 209036027642 </Text>

                    {/* client details section */}
                    <Text style={styles.infoHeader}>Client details</Text>

                    <Text style={styles.infoText}> Name: Munira </Text>
                    <Text style={styles.infoText}> Mobile: +965-99870766 </Text>
                    <Text style={styles.infoText}> Phone: </Text>
                    <Text style={styles.infoText}> Email address: eeda1999@gmail.com </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        margin: 1
    },
    itemHeader: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 5,
        paddingHorizontal: 15
    },
    headerStyle: {
        fontSize: 16,
        fontWeight: '500'
    }
    ,
    separetor: {
        width: '100%',
        height: 2,
        backgroundColor: '#b3b3b3'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 5
    },
    itemNameStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    itemPriceStyle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    infoDetail: {
        marginTop: 15,
        paddingHorizontal: 15
    },
    infoHeader: {
        fontSize: 16,
        fontWeight: '800',
        // marginVertical: 5
        marginTop: 10,
        marginBottom: 5,
        // borderBottomWidth:5,
        // borderBottomColor:'#fff',
        // textDecorationLine: 'underline',
        // textDecorationStyle: "solid",
        // textDecorationColor: "#000",
       
    },
    infoText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 22,
        alignSelf: 'stretch'
    },
    sizedBox: {
        height: 10,
    }
})

export default ItemDetails