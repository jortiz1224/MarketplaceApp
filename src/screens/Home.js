import React from 'react'
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {
    return(
      <ScrollView>
        <View style={styles.overAllBg}>
           <View style={styles.headerContainer}>
               <Image style={styles.topIcon}
                    source={require('../images/1.png')}/>
               <View style={styles.insideHeader}>
                   <View style={{width:"50%"}}>
                        <Text style={styles.headerText}>Hi User</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                        <Image style={{height:60,width:60}}
                            source={require('../images/g.png')}/>
                   </View>
               </View>
           </View>

           <LinearGradient style={styles.searchBoxGradient}
              colors={["rgb(222,184,135)", "transparent"]}>
               <View style={styles.searchBox}>
                   <TextInput style={{fontWeight:"bold", fontSize:18, width:260}}
                      placeholder="Search"
                      placeholderTextColor="#b1e5d3" />
                   <Image style={{height:20,width:20}}
                      source={require('../images/3.png')}/>
               </View>
            </LinearGradient>

            <View style={styles.recommendedHeader}>
                <View style={{width:"50%"}}>
                    <Text style={styles.recommendedHeaderText}>Recommended</Text>
                      <View style={styles.recommendedDesign}>
                      </View>
                </View>
                <View style={{width:"50%", alignItems:"flex-end"}}>
                    <View style={styles.moreContainer}>
                        <Text style={styles.moreText}>More</Text>
                    </View>
                </View>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{height:400}} >
                <LinearGradient style={styles.contentGradient} colors={["rgba(0,164,109,0.09)", "transparent"]}/>
                    <TouchableOpacity style={styles.touchableOpac}
                        onPress={()=>navigation.navigate("Detail")}>
                        <Image style={styles.contentImage}
                            source={require('../images/ching.jpg')}/>
                        <View style={styles.contentTextContainer}>
                            <Text style={{fontWeight:"bold" }}>Ching</Text>
                            <Text style={styles.contentAmount}>$400</Text>
                        </View>
                        <Text style={styles.contentCountry}>RUSSIA</Text>
                    </TouchableOpacity>

                    <View style={styles.contentContainer}>
                        <Image style={styles.contentImage}
                            source={require('../images/ukay.jpg')}/>
                        <View style={styles.contentTextContainer}>
                            <Text style={{fontWeight:"bold"}}>Ukay</Text>
                            <Text style={styles.contentAmount}>$400</Text>
                        </View>
                        <Text style={styles.contentCountry}> PHILIPPINES</Text>
                    </View>

                    <View style={styles.contentContainer}>
                        <Image style={styles.contentImage}
                            source={require('../images/fluff.jpg')}/>
                        <View style={styles.contentTextContainer}>
                            <Text style={{fontWeight:"bold"}}>Fluffita</Text>
                            <Text style={styles.contentAmount}>$400</Text>
                        </View>
                        <Text style={styles.contentCountry}>USA</Text>
                    </View>
                </ScrollView>            

               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-10,
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Featured Dogs</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>More</Text>
                        </View>
                   </View>
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >
                    <Image
                        source={require("../images/18.png")}
                        style={{marginTop:20,marginHorizontal:20}}
                    />
                     <Image
                        source={require("../images/19.png")}
                        style={{marginTop:20,borderRadius:10}}
                    />
                </ScrollView>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:"#FBB574",
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
  searchBoxGradient:{
    left:0,
    right:0,
    height:90,
    marginTop:-25
  },
  searchBox:{
    backgroundColor:"#FFF",
    paddingVertical:8,
    paddingHorizontal:20,
    marginHorizontal:20,
    borderRadius:15,
    marginTop:25,
    flexDirection:"row",
    alignItems:"center"
  },
  recommendedHeader:{
    flexDirection:"row",
    paddingHorizontal:20,
    width:"100%",
    alignItems:"center"
  },
  recommendedHeaderText:{
    fontWeight:"bold",
    fontSize:17,
    color:"#585a61"
  },
  recommendedDesign:{
    height:4,
    backgroundColor:"#b1e5d3",
    width:115,
    marginTop:-5
  },
  moreContainer:{
    backgroundColor:"#00a46c",
    paddingHorizontal:20,
    paddingVertical:5,
    borderRadius:15
  },
  moreText:{
    fontWeight:"bold",
    fontSize:13,
    color:"#FFF"
  },
  contentGradient:{
    position:"absolute",
    left:0,
    right:0,
    height:100,
    marginTop:220,
    top:0
  },
  touchableOpac:{
    height:250,
    elevation:2,
    backgroundColor:"#FFF",
    marginLeft:20,
    marginTop:20,
    borderRadius:15,
    marginBottom:10,
    width:160
  },
  contentContainer:{
    height:250,
    elevation:2,
    backgroundColor:"#FFF",
    marginLeft:20,
    marginTop:20,
    borderRadius:15,
    marginBottom:10,
    width:160
  },
  contentTextContainer:{
    flexDirection:"row",
    paddingTop:10,
    paddingHorizontal:10
  },
  contentImage:{
    height:200,
    width:180,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },
  contentAmount:{
    fontWeight:"bold",
    color:"#AB6B51",
    paddingLeft:35
  },
  contentCountry:{
    paddingHorizontal:10,
    fontWeight:"bold",
    color:"#b1e5d3",
    paddingTop:3       
  }
});
export default Home;