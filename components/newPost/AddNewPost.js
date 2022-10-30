import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const AddNewPost = () => {
  return (
    <View style={styles.container}>
        <Header/>
    </View>
  )
}

const Header=() => (
<Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal:26 }}>Create New Post</Text>
)

const styles = StyleSheet.create({

    container: {
        
        marginHorizontal: 26,  

    },

    headerContainer:{
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}

)


export default AddNewPost