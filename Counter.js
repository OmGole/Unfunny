import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity,StyleSheet,Text,FlatList } from 'react-native';
import { db } from './firebase_config'
import { collection, doc, getDocs } from "firebase/firestore"; 
import ItemList from './ItemList';
import Individual from './Individual';

const Counter = () => {
  const [users,setUsers] = useState([]);
  const usersCollections = collection(db,"users");

  const getUsers = async () => {
    const data = await getDocs(usersCollections);
    const filteredData = data.docs.map((doc) => ({
       id : doc.id
    }));
    setUsers(filteredData);
  }
  useEffect(() =>{
    getUsers();
  },[]);

  return (  
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return <Individual item={item}/>
        }}
      />
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding:16
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Counter;