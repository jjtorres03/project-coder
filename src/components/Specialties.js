import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import SpecialtieItem from '../components/SpecialtieItem.js'

// Data
import { specialties } from '../data/specialties.js'



const Specialties = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={specialties}
      keyExtractor={(key) => key}
      renderItem={({item}) => <SpecialtieItem item={item}
      navigation = {navigation} />}

      />
    </View>
  )
}
const styles = StyleSheet.create({

    container : {
        paddingTop : 10
    }
})


export default Specialties;