import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const compromissosEquipe = [
  {
    title: 'Eu',
    data: [
      '09h30: Reunião "Daily"',
      '14h00: Reunião com cliente Carros & Carros',
      '16h30: Prazo final Projeto X',
    ],
  },
  {
    title: 'Jurema (chefe)',
    data: [
      '09h30: Reunião "Daily"',
      '12h00: Almoço com a diretoria',
      '15h00: Saída viagem',
    ],
  },
  {
    title: 'Aderbal',
    data: [
      '09h30: Reunião "Daily"',
      '13h30: Visita técnica Uni-FACEF',
      '16h30: Prazo final Projeto X',
    ],
  },
];

export default function SemanaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerCentro}>
        <Text style={styles.infoTexto}>Pedro Henrique de Souza</Text>
        <Text style={styles.infoTexto}>Ciências da Computação</Text>
        <Text style={[styles.euTitulo, { marginTop: 4 }]}>(Eu)</Text>
      </View>

      <SectionList
        sections={compromissosEquipe}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.itemTexto}>{item}</Text>
        )}
        renderSectionHeader={({ section }) =>
          section.title === 'Eu' ? null : (
            <Text style={styles.sectionTitulo}>{section.title}</Text>
          )
        }
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
    marginBottom: 16,
  },
  infoTexto: {
    fontSize: 12,
    color: '#555555',
  },
  euTitulo: {
    fontSize: 16,
    fontWeight: '700',
  },
  listaConteudo: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  sectionTitulo: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 12,
    marginBottom: 4,
  },
  itemTexto: {
    fontSize: 14,
    marginBottom: 4,
  },
});
