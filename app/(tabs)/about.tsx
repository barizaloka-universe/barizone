import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Tentang Aplikasi</Text>

        <View style={styles.card}>
          <Text style={styles.titleText}>Tentang Barizone</Text>
          <Text style={styles.bodyText}>
            Barizone adalah sebuah aplikasi yang dirancang untuk membantu Anda meningkatkan fokus dan produktivitas menggunakan teknik Pomodoro. Setiap kali Anda berhasil menyelesaikan sesi fokus, tanaman virtual Anda akan tumbuh sedikit demi sedikit, memberikan motivasi visual untuk tetap produktif.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.titleText}>Pencipta</Text>
          <Text style={styles.bodyText}>
            Aplikasi ini diciptakan oleh Tim Barizone, sebuah tim kecil yang bersemangat untuk menciptakan alat-alat yang berguna dalam kehidupan sehari-hari. Kami berharap Barizone dapat membantu Anda mencapai tujuan-tujuan Anda.
          </Text>
        </View>
        
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Versi Aplikasi: 1.0.0</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F7F9F5', // Warna latar belakang yang sama
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#346A29', // Warna hijau yang sama
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#346A29',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    color: '#555555',
    lineHeight: 24,
  },
  versionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 14,
    color: '#888888',
  },
});