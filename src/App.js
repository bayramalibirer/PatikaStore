import React from "react";
import { Text, StyleSheet,SafeAreaView,View, FlatList, TextInput } from "react-native";
import Store_Card from './components/Store_Card'
import Store_data from './store.json'


function App(){
    const r_item = ({item})=><Store_Card store={item}/>
    return(
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.title}>PATIKASTORE</Text>
            <TextInput style={styles.search} placeholder="Ara..."></TextInput>
            </View>
            <FlatList
                numColumns={2}
                data={Store_data}
                renderItem={r_item}
                />
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "white"
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        color:"purple",
        padding:10
    },
    search:{
        backgroundColor:"#eceff1",
        padding:5,
        margin:5,
        borderRadius:10

    }

  })
export default App;