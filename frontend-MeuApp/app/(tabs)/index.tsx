import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const contas = [
  { id: '1', nome: 'Mercado Livre Cozinha', preco: 80.91, parcelas: '6/8' },
  { id: '2', nome: 'Celular da Vó', preco: 77.66, parcelas: '5/12' },
  { id: '3', nome: 'Curso do Matheus', preco: 17.51, parcelas: '10/10' },
  { id: '4', nome: 'Óculos do Matheus', preco: 75.00, parcelas: '5/6' },
  { id: '5', nome: 'Shopi (Tapetes e Cobertas)', preco: 27.00, parcelas: '2/4' },
  { id: '6', nome: 'Mesa do Computador', preco: 43.37, parcelas: '2/8' },
  { id: '7', nome: 'Créditos Celular Matheus', preco: 55.00, parcelas: 'N/A' },
];

const totalFatura = contas.reduce((acc, conta) => acc + conta.preco, 0);

export default function FinancasScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>Painel Financeiro</Text>
      <Text style={styles.totalFatura}>Fatura (fecha em 02/Nov): R$ {totalFatura.toFixed(2).replace('.', ',')}</Text>

      <FlatList
        data={contas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contaItem}>
            <View>
              <Text style={styles.contaNome}>{item.nome}</Text>
              <Text style={styles.contaParcelas}>Parcelas: {item.parcelas}</Text>
            </View>
            <Text style={styles.contaPreco}>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.footer}>
            <Text style={styles.footerText}>Total: R$ {totalFatura.toFixed(2).replace('.', ',')}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f4f7', paddingHorizontal: 20 },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: '#1a2b48', marginTop: 20, marginBottom: 10, textAlign: 'center' },
  totalFatura: { fontSize: 18, color: '#666', marginBottom: 20, textAlign: 'center' },
  contaItem: {
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
  contaNome: { fontSize: 18, fontWeight: '500' },
  contaParcelas: { fontSize: 14, color: '#888' },
  contaPreco: { fontSize: 18, fontWeight: 'bold', color: '#2e8b57' },
  footer: { marginTop: 20, paddingVertical: 15, borderTopWidth: 1, borderColor: '#ccc', alignItems: 'flex-end' },
  footerText: { fontSize: 20, fontWeight: 'bold' },
});