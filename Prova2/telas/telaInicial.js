import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda</Text>

            <View style={styles.subcontainer}>
                <Text style={styles.subtexto}>Pedro Henrique de Souza</Text>
                <Text style={styles.subtexto}>Ciências da Computação</Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dia')}>
                    <Text style={styles.buttonText}>COMPROMISSOS DO DIA</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Semana')}>
                    <Text style={styles.buttonText}>COMPROMISSOS DA SEMANA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff' },
    titulo: { fontSize: 28, fontWeight: '700', marginBottom: 12 },
    subcontainer: { alignItems: 'center', marginBottom: 32 },
    subtexto: { fontSize: 14, color: '#444' },
    actions: { gap: 12, width: '100%' },
    button: {
        backgroundColor: '#d1d5db', // cinza claro
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 6,
        alignSelf: 'center',
        minWidth: 240,
        alignItems: 'center',
    },
    buttonText: { fontWeight: '700', letterSpacing: 0.5, color: '#111' },
});
