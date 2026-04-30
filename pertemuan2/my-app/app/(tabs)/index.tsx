import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Image
  source={require('../../assets/images/WhatsApp Image 2026-04-30 at 11.44.49.jpeg')}
  style={styles.image}
/>

        <Text style={styles.name}>Prasetya Amal Dinata</Text>
        <Text style={styles.info}>NIM: 243303621248</Text>
        <Text style={styles.info}>Jurusan: Sistem Informasi</Text>

        <Text style={styles.quote}>
          "Ngoding hari ini, sukses nanti."
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // wajib hex
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 20, // ✅ wajib
    alignItems: 'center',

    // shadow (biar kelihatan niat)
    shadowColor: '#000', // ✅ opsional tapi recommended
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60, // biar bulat
    marginBottom: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 5,
  },

  info: {
    fontSize: 16,
    color: '#e2e8f0',
  },

  quote: {
    marginTop: 15,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#94a3b8',
    textAlign: 'center',
  },
});