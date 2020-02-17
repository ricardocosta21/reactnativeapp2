import { Component } from "react";
import styles from "../style";

class Detail extends Component{

    render(){
        return(
            <View style={styles.text}>
            <Text style={styles.text}>Detail Screen</Text>
            <Button title='View Bottom Tabs' onPress={() =>{}} />

            <Button title='View Top Tabs' onPress={() =>{}} />


            </View>
        )
    }
}

export default Detail;