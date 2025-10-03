import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, TouchableOpacity, SafeAreaView, Alert } from 'react-native';


const TAREFAS_DA_SEMANA = {
  'Quinta-feira': [
    { title: 'Nayanne', data: ['Jogar lixo', 'Arrumar sala', 'Estudar'] },
    { title: 'Kaleb baby da vóvó', data: ['Arrumar o quarto do Pedro', 'Estudar'] },
    { title: 'Matheus Zica', data: ['Lavar a louça', 'Estudar'] },
    { title: 'Pedro Stein', data: ['Estudar'] },
  ],

};

const TAREFAS_INICIAIS = TAREFAS_DA_SEMANA['Quinta-feira'];

export default function TarefasScreen() {
  const [tarefas, setTarefas] = useState(TAREFAS_INICIAIS);

  const handleConcluir = (tarefaNome: string) => {
    Alert.alert('Tarefa Concluída!', `Você marcou "${tarefaNome}" como concluída.`);


    const novasTarefas = tarefas.map(secao => ({
      ...secao,
      data: secao.data.filter(item => item !== tarefaNome),
    })).filter(secao => secao.data.length > 0);

    setTarefas(novasTarefas);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Tarefas de Hoje</Text>
r
      {tarefas.length > 0 ? (
        <SectionList
          sections={tarefas}
          keyExtractor={(item, index) => item + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          renderItem={({ item }) => (
            <View style={styles.tarefaItem}>
              <Text style={styles.tarefaNome}>{item}</Text>
              <TouchableOpacity
                style={styles.botaoConcluir}
                onPress={() => handleConcluir(item)}
              >
                <Text style={styles.botaoTexto}>✓</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <View style={styles.semTarefasContainer}>
          <Text style={styles.semTarefasTexto}>🎉</Text>
          <Text style={styles.semTarefasTexto}>Todas as tarefas foram concluídas!</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7', paddingHorizontal: 20 },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#1a2b48', marginTop: 20, marginBottom: 20, textAlign: 'center' },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#e9ecef',
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 5,
    borderRadius: 8,
    color: '#495057',
  },
  tarefaItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  tarefaNome: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
  },
  botaoConcluir: {
    backgroundColor: '#28a745',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  semTarefasContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  semTarefasTexto: {
    fontSize: 22,
    color: '#888',
    textAlign: 'center',
  }
});