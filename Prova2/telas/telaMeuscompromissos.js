import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const meusCompromissos = [
  { id: '1', texto: '09h30: Reunião "Daily"' },
  { id: '2', texto: '14h00: Reunião com cliente Carros & Carros' },
  { id: '3', texto: '16h30: Prazo final Projeto X' },
];

export default function DiaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerCentro}>
        <Text style={styles.euTitulo}>(Eu)</Text>
        <Text style={styles.infoTexto}>Pedro Henrique de Souza</Text>
        <Text style={styles.infoTexto}>Ciências da Computação</Text>
      </View>

      <FlatList
        data={meusCompromissos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.itemTexto}>{item.texto}</Text>
        )}
        contentContainerStyle={styles.listaConteudo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerCentro: {
    alignItems: 'center',
    marginBottom: 24,
  },
  euTitulo: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  infoTexto: {
    fontSize: 12,
    color: '#555555',
  },
  listaConteudo: {
    paddingTop: 8,
  },
  itemTexto: {
    fontSize: 14,
    marginBottom: 8,
  },
});