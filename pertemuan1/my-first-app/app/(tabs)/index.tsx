import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.card}>
        <Text style={styles.title}>🚀 My First App</Text>

        <Text style={styles.text}>
          Prasetya Amal Dinata
        </Text>

        <Text style={styles.subText}>
          243303621248 | Sistem Informasi
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', // dark navy
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    color: '#38bdf8', // biru terang
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
  subText: {
    fontSize: 16,
    color: '#94a3b8',
    marginTop: 5,
  },
});