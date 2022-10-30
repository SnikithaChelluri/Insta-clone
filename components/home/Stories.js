import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'
import { fonts } from 'react-native-elements/dist/config'
import { USERS } from '../../data/users'



function Stories() {
  return (
    <View style ={{marginBottom: 15, marginLeft:400, marginRight:600,
            borderWidth: 1, borderColor:'darkgray', borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => (
                <View key={index} style={{alignItems:'center', marginTop:7, marginBottom:7}}>
                <Image source={{uri: story.image}}
                style={styles.story}/>
                <Text>{story.user.length > 3
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase}
                </Text>
                </View>
            ))}
        </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    story:{
        width:70,
        height: 70,
        borderRadius: 50,
        marginLeft: 8,
        borderWidth:3,
        borderColor: '#ff8501'
    }
})
export default Stories
