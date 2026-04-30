import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>TechGears Store</Text>
      </View>

      {/* GRID */}
      <View style={styles.grid}>

        {/* ROW 1 */}
        <View style={styles.row}>
          <View style={styles.card}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>OFF</Text>
            </View>
            <Text style={styles.cardText}>Laptop</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Headset</Text>
          </View>
        </View>

        {/* ROW 2 */}
        <View style={styles.row}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Keyboard</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardText}>Mouse</Text>
          </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 50,
  },

  
  
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#38bdf8',
  },

  grid: {
    paddingHorizontal: 10,
  },

  row: {
    flexDirection: 'row', // ✅ wajib
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#1e293b',
    width: '48%', // biar 2 kolom
    height: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  // ABSOLUTE BADGE
  badge: {
    position: 'absolute', // ✅ wajib
    top: 10,
    right: 10,
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});