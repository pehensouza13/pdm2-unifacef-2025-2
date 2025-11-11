import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const dadosSemana = [
  {
    title: 'Segunda-feira (10/11)',
    data: [
      '08h30: Dentista',
      '10h00: Pilates',
    ],
  },
  {
    title: 'Terça-feira (11/11)',
    data: [
      '09h00: Médico',
      '10h30: Reunião de planejamento',
      '15h00: Saída viagem',
    ],
  },
  {
    title: 'Quarta-feira (12/11)',
    data: [
      '09h00: Congresso',
      '12h30: Almoço com executivos',
      '20h30: Jantar de confraternização',
    ],
  },
];

export default function SemanaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTopo}>Pedro henrique de souza</Text>
      <Text style={[styles.headerTopo, { marginBottom: 12 }]}>ciencias da computação</Text>

      <SectionList
        sections={dadosSemana}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.section}>{section.title}</Text>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  headerTopo: { color: '#666' },
  section: {
    fontSize: 18,
    fontWeight: '800',
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginTop: 12,
  },
  item: { paddingVertical: 10, paddingHorizontal: 8, borderBottomWidth: 1, borderBottomColor: '#eee' },
});
