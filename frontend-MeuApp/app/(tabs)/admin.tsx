import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';

export default function AdminScreen() {
  // Estados para o formulário de finanças
  const [financaNome, setFinancaNome] = useState('');
  const [financaPreco, setFinancaPreco] = useState('');
  const [financaParcelas, setFinancaParcelas] = useState('');
  const [financaUsuario, setFinancaUsuario] = useState('');

  // Estados para o formulário de tarefas
  const [tarefaNome, setTarefaNome] = useState('');
  const [tarefaUsuario, setTarefaUsuario] = useState('');

  const handleLancarFinanca = () => {
    if (!financaNome || !financaPreco || !financaUsuario) {
      Alert.alert('Erro', 'Preencha todos os campos para lançar a finança.');
      return;
    }
    Alert.alert(
      'Finança Lançada!',
      `Nome: ${financaNome}\nPreço: R$ ${financaPreco}\nParcelas: ${financaParcelas || 'N/A'}\nUsuário: ${financaUsuario}`
    );
    // Limpar campos após o lançamento
    setFinancaNome('');
    setFinancaPreco('');
    setFinancaParcelas('');
    setFinancaUsuario('');
  };

  const handleLancarTarefa = () => {
    if (!tarefaNome || !tarefaUsuario) {
      Alert.alert('Erro', 'Preencha todos os campos para lançar a tarefa.');
      return;
    }
    Alert.alert(
      'Tarefa Lançada!',
      `Nome: ${tarefaNome}\nUsuário: ${tarefaUsuario}`
    );
    // Limpar campos após o lançamento
    setTarefaNome('');
    setTarefaUsuario('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Painel Admin</Text>

        {/* Formulário de Finanças */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Lançar Finança</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Despesa"
            value={financaNome}
            onChangeText={setFinancaNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Preço (ex: 80.91)"
            value={financaPreco}
            onChangeText={setFinancaPreco}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Parcelas (ex: 6/8)"
            value={financaParcelas}
            onChangeText={setFinancaParcelas}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuário (ex: Nayanne)"
            value={financaUsuario}
            onChangeText={setFinancaUsuario}
          />
          <TouchableOpacity style={styles.button} onPress={handleLancarFinanca}>
            <Text style={styles.buttonText}>Lançar Finança</Text>
          </TouchableOpacity>
        </View>

        {/* Formulário de Tarefas */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Lançar Tarefa</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome da Tarefa"
            value={tarefaNome}
            onChangeText={setTarefaNome}
          />
          <TextInput
            style={styles.input}
            placeholder="Usuário (ex: Káleb)"
            value={tarefaUsuario}
            onChangeText={setTarefaUsuario}
          />
          <TouchableOpacity style={styles.button} onPress={handleLancarTarefa}>
            <Text style={styles.buttonText}>Lançar Tarefa</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7' },
  scrollContainer: { paddingHorizontal: 20, paddingBottom: 40 },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#1a2b48', marginTop: 20, marginBottom: 20, textAlign: 'center'},
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    color: '#343a40',
  },
  input: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});