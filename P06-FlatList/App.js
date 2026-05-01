// App.js — versi dasar FlatList
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { PRODUCTS } from './data/products';   // import data
import ProductCard from './components/ProductCard'; // import komponen

export default function App() {
  // Fungsi yang dipanggil saat card ditekan
  const handleProductPress = (product) => {
    Alert.alert(
      product.name,
      `Harga: Rp ${product.price.toLocaleString('id-ID')}\nRating: ⭐ ${product.rating}`,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      {/* ===== HEADER APLIKASI ===== */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🛍️ Toko Kita</Text>
        <Text style={styles.headerSubtitle}>
          {PRODUCTS.length} produk tersedia
        </Text>
      </View>

      {/* ===== FLAT LIST — INI INTINYA! ===== */}
      <FlatList
        data={PRODUCTS}                       // data array produk
        renderItem={({ item }) => (            // render tiap item
          <ProductCard
            item={item}
            onPress={handleProductPress}
          />
        )}
        keyExtractor={(item) => item.id}      // key unik tiap item
        showsVerticalScrollIndicator={false}  // sembunyikan scrollbar
        contentContainerStyle={styles.listContent} // styling container list
        ItemSeparatorComponent={() => (       // garis antar item
          <View style={styles.separator} />
        )}
        ListHeaderComponent={() => (          // header di atas list
          <Text style={styles.listHeader}>
            Produk Terlaris Minggu Ini 🔥
          </Text>
        )}
        ListEmptyComponent={() => (           // tampilan jika kosong
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>📦</Text>
            <Text style={styles.emptyText}>Belum ada produk</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  listContent: {
    paddingVertical: 12,
    paddingBottom: 32,
  },
  separator: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginHorizontal: 16,
  },
  listHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#6b7280',
    paddingHorizontal: 16,
    paddingBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 56,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#9ca3af',
    fontWeight: '600',
  },
});