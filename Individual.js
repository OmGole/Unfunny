import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { doc, setDoc, collection, getDoc, updateDoc, onSnapshot } from "firebase/firestore"; 
import { db } from './firebase_config'
import { getAuth } from "firebase/auth";


const Individual = ({ item }) => {
  const auth = getAuth();
  const authenticatedUser = auth.currentUser;

  // console.log(authenticatedUser);

  const userRef = doc(db, "users", item.id);
  const [user,setUser] = useState();
  const handleCount = async () => {
    const updatedCount = user.count + 1;
    const newCount = {count:updatedCount};
    await updateDoc(userRef, newCount);
  }

  const getUser = async () => {
    const docSnap = await getDoc(userRef);
    setUser(docSnap.data());
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(userRef, (snapshot) => {
        setUser(snapshot.data());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    getUser();
  },[item])


  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{user?.name}</Text>
        <Text style={styles.subtitle}>{user?.count}</Text>
      </View>
      {<TouchableOpacity style={styles.button} onPress={handleCount}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    flex:1
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Individual;
