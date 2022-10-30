import React, { useEffect, useState } from 'react'
import { SafeAreaView , StyleSheet, View, Text} from 'react-native'
import { ScrollView } from 'react-native'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import db from '../firebase'
import { collection, collectionGroup, onSnapshot } from 'firebase/firestore'

export default function HomeScreen() {
  const [posts, setPost]=useState([]);
  console.log(posts);
  useEffect(() => 
    onSnapshot(collectionGroup(db, "posts"), (snapshot) => 
      setPost(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})))
    ),
    []
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories/>
      <ScrollView>
        {posts.map((post) =>(
          <Post post={post} key={post.id}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
  backgroundColor : 'light grey',
  flex: 1
  },
})
