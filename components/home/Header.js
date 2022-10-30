import { View, Text, Image, StyleSheet,Modal  } from 'react-native'
import React, { useState } from 'react'
import {  Touchable, TouchableOpacity } from 'react-native'
import { faker } from '@faker-js/faker'
import AddNewPost from '../newPost/AddNewPost'
import FormikPostUploader from '../newPost/FormikPostUploader'

const Header = () => {
    const[activeTab, setActiveTab] = useState('Home')
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                style={styles.logo} 
                source={require('../../assets/instalogo.png')}
            />
        </TouchableOpacity>

    <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => setActiveTab('home')}>
            <Image 
                style={styles.icon} 
                source={{uri: activeTab == 'home' ? require('../../assets/home.png'):require('../../assets/homef.png') }}
            />
         </TouchableOpacity>

         <TouchableOpacity onPress={() => setActiveTab('message')}>
            
            
      <Image 
        style={styles.icon} 
        source={{uri: activeTab == 'message' ? require('../../assets/messagef.png'):require('../../assets/message.png') }}
        />
        </TouchableOpacity >
       
        <View style = {styles.unreadBadge}>
        <Text style={styles.unreadBadgeText} >11</Text>
        </View>

    

        
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
>
       
          <View style={styles.modalView} >
            
          <AddNewPost/>
          <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible)}}>
      <Image 
        style={{width: 7,
          height: 7,
          marginLeft: 5,
          resizeMode: 'contain',}} 
        source={{uri:require('../../assets/close.png')}}/>
      </TouchableOpacity>
          <FormikPostUploader/>
          </View>
    
      </Modal>

        <TouchableOpacity onPress={() => {setActiveTab('plus'),setModalVisible(true)}}>
      <Image 
        style={styles.icon} 
        source={{uri: activeTab == 'plus' ? require('../../assets/plusf.png'):require('../../assets/plus.png') }}/>
        </TouchableOpacity>

    
        <TouchableOpacity onPress={() => setActiveTab('explore')}>
      <Image 
        style={styles.icon} 
        source={{uri: activeTab == 'explore' ? require('../../assets/exploref.png'):require('../../assets/explore.png') }}/>        </TouchableOpacity>
    
   
        <TouchableOpacity onPress={() => setActiveTab('heart')}>
      <Image 
        style={styles.icon} 
        source={{uri: activeTab == 'heart' ? require('../../assets/heartf.png'):require('../../assets/heart.png') }}/>
        </TouchableOpacity>
    
        <TouchableOpacity>
      <Image 
        style={{width:30,
            height: 30,
            borderRadius: 100,
            marginLeft: 20,
        resizeMode: 'contain',}}
        source={{uri:faker.image.people(70,70,true)}}/>
        </TouchableOpacity>
   
     </View>

    </View>

  )
}

const styles=StyleSheet.create({
container:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 250,

},

iconsContainer:{
    flexDirection: 'row',
},
    logo: {
        width: 100,
        height: 50,
        reziseMode: 'contain'
    },

    icon:{
        width: 30,
        height: 30,
        marginLeft: 20,
        resizeMode: 'contain',
    },
    unreadBadge: {
        backgroundColor: '#FF3250',
        
        position: 'absolute',
        left:85,
        bottom:18,
        width: 20,
        height:18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },

    unreadBadgeText:{
        fontWeight: '600'
    },
      modalView: {
        marginTop: 180,
        margin:20,
        width: 500,
        height:500,
        alignSelf:'center',
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }
})

export default Header