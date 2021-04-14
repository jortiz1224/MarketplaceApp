import React from 'react'
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Favourite = ({navigation}) => {
    return(
        <View style={styles.overAllBg}>
           <View style={styles.headerContainer}>
               <Image style={styles.topIcon}
                    source={require('../images/1.png')} />
               <View style={styles.insideHeader}>
               <View style={{width:"50%"}}>
                    <Text style={styles.headerText}>Favourites</Text>
                </View>
                <View style={{width:"50%",alignItems:"flex-end"}}>
                    <Image style={{height:60,width:60}}
                        source={require('../images/g.png')}/>
                </View>
            </View>
        </View>

        <View style={{
              flexDirection:"row",
              paddingHorizontal:20,
              width:"100%",
              alignItems:"center"
            }}></View>  
          
          <ScrollView style={{height:400}}>
            <TouchableOpacity style={styles.touchableOpac}
                onPress={()=>navigation.navigate("Detail")}>
              <Image style={styles.contentImage}
                  source={require('../images/ching.jpg')}/>
              <View style={{
                  paddingTop:10,
                  paddingHorizontal:10
              }}>
                  <Text style={{fontWeight:"bold"}}>Ching</Text>
                  <Text style={styles.contentAmount}>$400</Text>
                  <Text style={styles.contentCountry}>RUSSIA</Text>
                  <Text style={styles.contentDesc}>A cute and fluffy dog, chocolate brown in color and kind of chubby. Very energetic and playful.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpac}
                onPress={()=>navigation.navigate("Detail")}>
              <Image style={styles.contentImage}
                  source={require('../images/ukay.jpg')}/>     
              <View style={{
                  paddingTop:10,
                  paddingHorizontal:10
              }}>
                  <Text style={{fontWeight:"bold"}}>Ukay</Text>
                  <Text style={styles.contentAmount}>$340</Text>
                  <Text style={styles.contentCountry}>PHILIPPINES</Text>
                  <Text style={styles.contentDesc}>A cute and fluffy dog, hash brown in color and kind of fragile. Very energetic and playful.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchableOpac}
                onPress={()=>navigation.navigate("Detail")}>
              <Image style={styles.contentImage}
                  source={require('../images/fluff.jpg')}/>     
              <View style={{
                  paddingTop:10,
                  paddingHorizontal:10
              }}>
                  <Text style={{fontWeight:"bold"}}>Fluffita</Text>
                  <Text style={styles.contentAmount}>$650</Text>
                  <Text style={styles.contentCountry}>USA</Text>
                  <Text style={styles.contentDesc}>Husky, has pretty eyes, sweet, playful and very energetic.</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>            
        </View>
    )
}

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:"#D2B48C",
    height:"28%",
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingHorizontal:20
  },
  overAllBg:{
    backgroundColor:"#FFF",
    flex:1
  },
  topIcon:{
     height:10,
      width:20,
      marginTop:50
  },
  insideHeader:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:25,
    width:"100%"
  },
  headerText:{
    fontSize:28,
    color:"#FFF",
    fontWeight:"bold"
  }, 
  touchableOpac:{
    flexDirection:"row",
    height:200,
    elevation:2,
    backgroundColor:"#999",
    marginLeft:20,
    marginTop:20,
    borderRadius:15,
    marginBottom:10,
    width:300
  },
  contentImage:{
    height:200,
    width:180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  contentAmount:{
    fontWeight:"bold",
    color:"#EAEAEA",
    textAlign: 'left', alignSelf: 'stretch'
  },
  contentCountry:{
    fontWeight:"bold",
    color:"#b1e5d3",
    paddingTop:3,
    textAlign: 'left', alignSelf: 'stretch'      
  },
  contentDesc:{
    fontWeight:"bold",
    color:"#EAEAEA",
    width:100,
    fontStyle: 'italic',
    textAlign: 'left'
  }
});

export default Favourite;