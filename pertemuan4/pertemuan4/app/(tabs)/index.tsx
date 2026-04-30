import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const [score, setScore] = useState(0);
  const [bgColor, setBgColor] = useState('#0f172a');

  const tambah = () => {
    setScore(score + 1);
  };

  const kurang = () => {
    if (score > 0) {
      setScore(score - 1);
    }
  };

  const gantiWarna = () => {
    const colors = [
      '#0f172a',
      '#1e293b',
      '#334155',
      '#1d4ed8',
      '#16a34a',
      '#ef4444',
    ];
    const random = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(random);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>

      {/* SCORE */}
      <Text style={styles.score}>{score}</Text>

      {/* BUTTONS + & - */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={kurang}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={tambah}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* WIN TEXT */}
      <Text style={styles.message}>
        {score >= 10 ? 'You Win!' : 'Keep Going...'}
      </Text>

      {/* CHANGE COLOR */}
      <TouchableOpacity style={styles.colorBtn} onPress={gantiWarna}>
        <Text style={styles.btnText}>Ganti Warna</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  score: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#38bdf8',
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#38bdf8',
    padding: 15,
    borderRadius: 10,
    width: 60,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  message: {
    fontSize: 20,
    color: '#e2e8f0',
    marginBottom: 20,
  },

  colorBtn: {
    backgroundColor: '#ef4444',
    padding: 12,
    borderRadius: 10,
  },
});