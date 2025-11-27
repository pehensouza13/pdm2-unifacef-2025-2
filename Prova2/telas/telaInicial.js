import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda do dia</Text>

            <View style={styles.infoContainer}>
                <Text style={styles.infoTexto}>Pedro Henrique de Souza</Text>
                <Text style={styles.infoTexto}>Ciências da Computação</Text>
            </View>

            <View style={styles.botoesContainer}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Dia')}
                >
                    <Text style={styles.textoBotao}>Meus compromissos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Semana')}
                >
                    <Text style={styles.textoBotao}>Compromissos da equipe</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    titulo: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
    },
    infoContainer: {
        alignItems: 'center',
        marginBottom: 32,
    },
    infoTexto: {
        fontSize: 14,
        color: '#555555',
    },
    botoesContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 8
    },
    botao: {
        backgroundColor: '#e5e5e5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 6,
        minWidth: 220,
        alignItems: 'center',
        marginVertical: 6
    },
    textoBotao: {
        fontSize: 14,
        color: '#333333',
    },
});
