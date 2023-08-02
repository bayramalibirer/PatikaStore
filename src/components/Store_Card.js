import { Text, View, Image} from "react-native";
import React from "react";
import styles from './Store_Card_style';

const Store_Card =({store}) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:store.imgURL}}/>
            <Text style={styles.inner_title}>{store.title}</Text>
            <Text>{store.price}</Text>
            {store.inStock ?"":<Text style={styles.inStock}>STOKTA YOK</Text>}
        </View>
    )
}
export default Store_Card;