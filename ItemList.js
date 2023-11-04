import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const ItemList = () => {

  const [data, setData] = useState([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ]);

  return (
      <FlatList
        data={data}
        renderItem={(data) => (
          <Text>{data.title}</Text>
        )}
      />
    // <ScrollView>
    //   {data.map(x => (
    //     <View>
    //       <Text>{x.title}</Text>
    //     </View>
    //   ))}
    // </ScrollView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
});

export default ItemList;
