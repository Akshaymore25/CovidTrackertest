import React, {Component} from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

export default class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      isLoading:true,
      dataSource:[]
    }
  }
  componentDidMount()
  {
   fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>response.json())
    .then((responseJson)=>{
       this.setState({
         isLoading:false,
         dataSource:responseJson
          })
    })
  }

  renderItem=({item,index}) => {
    return(
      <View>
      <View style={{backgroundColor:'#fff',marginTop:15,borderRadius:5,flexDirection:'row',justifyContent:'space-between',height:30}}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
         <Text>India</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>1435616</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>32661</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:5}}>
         <Text>63363</Text>
        </View>
       </View>

       <View style={{backgroundColor:'#fff',marginTop:15,borderRadius:5,flexDirection:'row',justifyContent:'space-between',height:30}}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
         <Text>Russia</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>1435616</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>32661</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:5}}>
         <Text>63363</Text>
        </View>
       </View>

       <View style={{backgroundColor:'#fff',marginTop:15,borderRadius:5,flexDirection:'row',justifyContent:'space-between',height:30}}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
         <Text>China</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>1435616</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>32661</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:5}}>
         <Text>63363</Text>
        </View>
       </View>

       <View style={{backgroundColor:'#fff',marginTop:15,borderRadius:5,flexDirection:'row',justifyContent:'space-between',height:30}}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
         <Text>Japan</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>1435616</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>32661</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:5}}>
         <Text>63363</Text>
        </View>
       </View>
       </View>
    )
  }
  render(){
    let {dataSource,isLoading}=this.state
    return(
      <View style={{flex:1,marginHorizontal:10}}>

      <View style={{marginLeft:10,marginTop:20}}>
        <Text style={{fontSize:25}}>Covid Tracker</Text>
      </View>

      <View style={{flexDirection:'row',marginTop:20,marginRight:10,justifyContent:'space-around'}}>
        <View style={{backgroundColor:'#E6CAD9',width:65,height:65,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:12}}>Total Cases</Text>
          <Text>16251807</Text> 
        </View>
        <View style={{backgroundColor:'#AE5F8B',width:65,height:65,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:12}}>Deaths</Text>
          <Text>648621</Text>
        </View>
        <View style={{backgroundColor:'#749C49',width:65,height:65,borderRadius:8,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:12}}>Recovered</Text>
          <Text>9396854</Text>
        </View>
       </View>
          
       <View style={{backgroundColor:'#749C49',marginTop:15,borderRadius:5,flexDirection:'row',justifyContent:'space-between',height:30}}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
         <Text>Country</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>Confirmed</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>Deaths</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:5}}>
         <Text>Recovered</Text>
        </View>
       </View>

       <View style={{backgroundColor:'#49D6B6',marginTop:15,borderRadius:5,flexDirection:'row',justifyContent:'space-between',height:30}}>
        <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
         <Text>India</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>1435616</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
         <Text>32661</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center',marginRight:5}}>
         <Text>63363</Text>
        </View>
       </View>
       <View>
       <FlatList
       data={dataSource}
       renderItem={this.renderItem}
       keyExtractor={(item,index) => index.toString()}
       />
       </View>
      </View>
      
    );
  }
} 
