import React from 'react';
import { SafeAreaView,View,Text,StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from './components/Card';

function App(){

  return(
    <SafeAreaView style={styles.container}>

    <Text style={styles.logo}>MOVIE QUOTES</Text>

      <Card title="got" text="Winter is coming"/>
      <Card title="Star Wars" text="Do or do not. There is no try."/>
      <Card title="Game of Thrones" text="Winter is coming"/>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },

  logo:{
    textAlign:'center',
    fontSize: 30,
    backgroundColor:'white',
    padding:20,
  },

});

export default App;