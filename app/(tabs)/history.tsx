import { FlatList, StyleSheet, Text, View } from 'react-native';



let nama: string = "Jessen";
nama = 2;



// Contoh data riwayat. Dalam aplikasi nyata, data ini akan diambil dari penyimpanan lokal atau API.
const historyData = [
  { id: '1', date: '25-07-2025', duration: '25:00', status: 'Selesai' },
  { id: '2', date: '24-07-2025', duration: '25:00', status: 'Selesai' },
  { id: '3', date: '23-07-2025', duration: '25:00', status: 'Selesai' },
  { id: '4', date: '23-07-2025', duration: '15:00', status: 'Selesai' },
  { id: '5', date: '22-07-2025', duration: '25:00', status: 'Selesai' },
  { id: '6', date: '22-07-2025', duration: '50:00', status: 'Selesai' },
];

export default function HistoryScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <View>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
      <Text style={styles.durationText}>{item.duration}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Histori</Text>
      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F5', // Warna latar belakang yang sama
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#346A29', // Warna hijau yang sama
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555555',
  },
  statusText: {
    fontSize: 14,
    color: '#346A29',
    marginTop: 5,
  },
  durationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#346A29',
  },
});