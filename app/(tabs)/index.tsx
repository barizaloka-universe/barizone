import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leafIcon}>
          <Text style={styles.leafEmoji}>🌿</Text>
        </View>
        <Text style={styles.headerText}>Barizone</Text>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.timerText}>25:00</Text>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Mulai</Text>
        </TouchableOpacity>
        
        {/* Simple plant illustration using View and styling */}
        <View style={styles.plantContainer}>
          <View style={styles.plantPot}>
            <View style={styles.plantStem} />
            <View style={styles.plantLeaves}>
              <View style={[styles.leaf, styles.leftLeaf]} />
              <View style={[styles.leaf, styles.rightLeaf]} />
              <View style={[styles.leaf, styles.topLeaf]} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F5',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  leafIcon: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leafEmoji: {
    fontSize: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#346A29',
  },
  mainContent: {
    alignItems: 'center',
  },
  timerText: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#346A29',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#F5E7B7',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 50,
  },
  startButtonText: {
    fontSize: 18,
    color: '#A88D5D',
    fontWeight: 'bold',
  },
  plantContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  plantPot: {
    width: 80,
    height: 60,
    backgroundColor: '#8B4513',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'relative',
    alignItems: 'center',
  },
  plantStem: {
    width: 6,
    height: 80,
    backgroundColor: '#228B22',
    position: 'absolute',
    bottom: 60,
  },
  plantLeaves: {
    position: 'absolute',
    bottom: 100,
    width: 60,
    height: 60,
  },
  leaf: {
    width: 25,
    height: 35,
    backgroundColor: '#32CD32',
    borderRadius: 20,
    position: 'absolute',
  },
  leftLeaf: {
    left: 5,
    top: 20,
    transform: [{ rotate: '-30deg' }],
  },
  rightLeaf: {
    right: 5,
    top: 20,
    transform: [{ rotate: '30deg' }],
  },
  topLeaf: {
    left: 17,
    top: 5,
    transform: [{ rotate: '0deg' }],
  },
});