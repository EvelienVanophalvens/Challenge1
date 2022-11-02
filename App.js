import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bookTile}>
        <Text style={styles.bookTitle}>Book title 1</Text>
        <Text>By Some Random Dude</Text>
        <View style={styles.bookDescription}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interger luctus, nulla sit amet pellentesque ultricies, mangna nisl vulputate urna, quis feugiat purus emin id ex.</Text>
        </View>
        <View style={styles.bookDetail}>
          <Text>ISBN 978-8-2165-1860-1</Text>
          <Text style={styles.button}>READ</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 56,
  },
  bookTile:{
    marginHorizontal: '2%',
  },
  bookTitle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  bookDescription:{
    marginVertical: '2%',

  },
  bookDetail:{
    display: 'flex',
    marginVertical: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    borderColor: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
  }
});
