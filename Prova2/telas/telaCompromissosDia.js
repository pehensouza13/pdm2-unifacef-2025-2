import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const compromissosDia = [
  { id: '1', hora: '08h00', evento: 'Médico' },
  { id: '2', hora: '10h30', evento: 'Reunião de planejamento' },
  { id: '3', hora: '15h00', evento: 'Saída viagem' },
];

export default function DiaScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.hora}>{item.hora}</Text>
      <Text style={styles.evento}>{item.evento}</Text>
    </View>
  );

  const keyExtractor = useMemo(() => (item) => item.id, []);

  return (
    <View style={styles.container}>
      <Text style={styles.dataGrande}>11/11 (ter)</Text>
      <Text style={styles.subinfo}>Pedro henrique de souza</Text>
      <Text style={styles.subinfo}>ciencias da computação</Text>

      <FlatList
        data={compromissosDia}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{ paddingTop: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  dataGrande: { fontSize: 28, fontWeight: '800', marginBottom: 4 },
  subinfo: { color: '#666' },
  item: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  hora: { width: 70, fontWeight: '700' },
  evento: { flex: 1 },
});
