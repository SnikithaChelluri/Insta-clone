import React, { useState } from 'react'
import { ModalHover } from 'react-modal-hover'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Button, Divider,Image } from 'react-native-elements'
import { POSTS } from '../../data/posts'

const postFooterIcons =[
  {
    name: 'Like',
    image:'https://cdn-icons-png.flaticon.com/128/535/535285.png',
    likedimage: 'https://cdn-icons-png.flaticon.com/128/2107/2107845.png'
  },
  {
    name: 'Comment',
    image: 'https://cdn-icons-png.flaticon.com/128/3031/3031126.png'
  },
  {
    name: 'Share',
    image: 'https://cdn-icons-png.flaticon.com/128/2099/2099085.png'
  },
  {
    name:'Save',
    image: 'https://cdn-icons-png.flaticon.com/128/5662/5662990.png',
    imagesaved: 'https://cdn-icons-png.flaticon.com/128/5668/5668020.png'
    
  }
]


const Post = ({post}) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
  };
  return (
    <>
    <View style={{
      marginBottom: 30, marginLeft: 400, marginRight: 600,
      borderWidth: 1, borderColor: 'darkgray', borderTopLeftRadius: 20, borderTopRightRadius: 20,
      borderBottomLeftRadius: 20, borderBottomRightRadius: 20
    }}>

        <PostHeader post={post} />
        <View style={[{ width: "100%", backgroundColor: "red" }]}>
        <button onClick={handleClick}><Text style = {{marginLeft: 5, fontWeight: '1000'}}>More Info</Text></button>
        </View>
        <View style={{
       marginLeft: 0, marginRight: 0,
      borderWidth: 1, borderColor: 'darkgray', borderTopLeftRadius: 20, borderTopRightRadius: 20,
      borderBottomLeftRadius: 20, borderBottomRightRadius: 20
    }}>
      
      {isShown && <PostInfo post={post} />}
    </View>
        <Divider style={{ width: "100%", fontWeight: '700' }} />
        <PostImage post={post} />
        <View style={{ marginHorizontal: 15, marginTop: 10 }}>
          <PostFooter />
          <Likes post={post} />
          <Caption post={post} />
          <CommentsSection post={post} />
          <Comments post={post} />
        </View>
      </View></>
  )
}

const PostHeader = ({post}) => (
  <View style={{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 5, 
    alignItems: 'center'}}>
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image source={{uri: post.profile_picture}} 
      style={styles.story} />
        <Text style = {{marginLeft: 5, fontWeight: '700'}}>{post.user}</Text>
    </View>

    <Text style={{fontWeight:'900'}}>...</Text>
  </View>
)

const PostInfo = ({post}) => (
  <View style = {{width: 100,
    height:100,
    borderColor:'gray',
    marginLeft:20,}}>
    <Text style={{fontWeight:'600'}}>{post.cat}</Text>
    <Text> {post.catdes}</Text>
  </View>
)

const PostImage = ({post}) => (
  <View style ={{
    width:'100%',
    height: 450,
  }}>
  <Image source={{uri: post.imageUrl}}
  style={{ width: 500, height: 450 }}
  />
  </View>

)

const PostFooter=()=>(
  <View style= {{flexDirection:'row'}}>
    
  <Icon imgStyle={styles.footerIcon} imgSource={postFooterIcons[0].image}/>
  <Icon imgStyle={styles.footerIcon} imgSource={postFooterIcons[1].image}/>
  <Icon imgStyle={styles.footerIcon} imgSource={postFooterIcons[2].image}/>
  <View style ={{flex :1, alignItems: 'flex-end'}}>
    <Icon imgStyle={styles.footerIcon} imgSource={postFooterIcons[3].image}/>
  </View>
  </View>

)

const Icon= ({imgStyle, imgSource})=>(
  <TouchableOpacity>
    <Image style ={imgStyle} source={{uri: imgSource}} />
  </TouchableOpacity>
)

const Likes = ({post}) => (
  <View style={{flexDirection:'row', marginTop:4}}>
  <Text style={ {fontWeight: '600'}}>
    {post.likes.toLocaleString('en')} likes
  </Text>
  </View>
)

const Caption = ({post}) => (
  <View style={{marginTop:5}}>
  <Text style={{fontWeight:'600'}}>{post.user.name}</Text>
    <Text> {post.caption}</Text>
  </View>
)
const CommentsSection = ({post}) => (
  <TouchableOpacity>
  <View style={{marginTop:5}}>
    {!!post.comments.length && (
      <Text style={{color: 'gray'}}>
        View {post.comments.length > 1? 'all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1? 'comments' : 'comment'}
  </Text>
  )}
  </View>
  </TouchableOpacity>
)

const Comments = ({post}) => (
  <>  
      {post.comments.map((comment)=> (
      <View style={{flexDirection: 'row', marginTop: 5}}>
        
      <Image source={{uri: comment.image}} 
      style={styles.story} />
      <Text>
        <Text style={{fontWeight:'600', marginBottom:10}}>{comment.user}</Text>{' '}
        {comment.comment}
      </Text>
    </View>
      ))}
  </>
)

const styles = StyleSheet.create({
  story:{
      width:40,
      height: 40,
      borderRadius: 50,
      marginLeft: 6,
      borderWidth:1.6,
      borderColor: '#ff8501'
  },
  postBox:{
    width: 300,
    height: 300,
    borderColor: 'gray',
    marginLeft: 10
  },

  footerIcon: {
    height:33,
    width:33,
  
  },

 
})


export default Post
