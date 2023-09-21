import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import theme from '../theme.js';

const Start = ( {navigation} ) => {
 
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Bienvenidos!</Text>

    <View style={styles.containerButton}>
        <Pressable style={styles.button}  onPress={() => {navigation.navigate('Specialties')}}>
           <Text style={styles.textButton}>Iniciar Sesion</Text> 
        </Pressable>
        <Pressable style={styles.button} onPress={() => console.log('presiona')}>
          <Text style={styles.textButton}>Registrarse</Text>
        </Pressable>
    </View>

   </View>
  )
}

const styles = StyleSheet.create({

    container : {
      flex : 1,
      justifyContent: 'center'
    },

     text : { 
      marginLeft : 140,
      marginBottom : 30,
      color: theme.color.background,
      fontSize : theme.fontSizes.subHeading,
      fontWeight : theme.fontWeigths.bold,

   },

    containerButton : {
      flexDirection : 'row',
      display : 'flex',
      justifyContent : 'space-evenly',
    },

    button : {
     backgroundColor : theme.color.PrimaryText,
     padding: 10,
     borderRadius : 10,
    },

    textButton : {
      color : theme.color.SecondaryText,
      fontSize : theme.fontSizes.subHeading,    
    }
})

export default Start;