const { useState } from 'react';
import React { useStatefrom } 'react';
import { SafeAreaView, view, text, touchableOpacity, stylesheet, scrollview, textinput, alert, TouchableOpacity, View, TextInput } from 'react-native';
export default function app() {
  const [pagina, setPagina] = useState('home');
  return (
    <SafeAreaView style={style.container}>
      <header pagina={pagina} setpagina={setpagina}>
        <scrollview contentContainerstyle={style.content}>
          {pagina === 'home' && <Home />}
          {pagina === 'sobre' && <Sobre />}
          {pagina === 'serviços' && <Serviços />}
          {pagina === 'contato' && <Contato />}



        </scrollview>
      </header>
    </SafeAreaView>
  );
}
//skate é tudo
function Header({ pagina, setpagina }) {
  return (
    <View style={styles.header} >
      <Texte styles={style.headertitle}>BRD TRANSPORTES</Texte>
      <View style={styles.nav}>
        {['home', 'sobre', 'serviços', 'contato'].map((p) => (
          <TouchableOpacity
            key={p}
            styles={[styles.navButton, pagina === p && styles.navButtonActive]}
            onPress={() => setPagina(P)}
          >
            <Text styles={styles.navButtonText}>{p.charAt(0).toUpperCase() + p.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

function Home() {
  return (
    <View style={styles.section}>
      <Text style={style.title}>BEM-VINDO Á NOSSA EMPRESSA</Text>
      <Text>Somos líderes em soluções tecnológicas para o seu negócio.</Text>
    </View>
  );
}
function Sobre() {
  return (
    <View style={styles.section}>
      <Text style={style.title}>SOBRE NÓS</Text>
      <Text>Fundada em 2025, temos o compromisso de qualidade e inovação.</Text>
    </View>
  );
}
function Serviços() {
  return (
    <View style={styles.section}>
      <Text style={style.title}>NOSSOS SERVIÇOS</Text>
      <Text>- Consultoria em TI.</Text>
      <Text>- DESENVOLVIMENTO DE Software .</Text>
      <Text>- Suporte Tecnico.</Text>
    </View>
  );
}
function Contato() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');


  function enviar() {

    if (!nome || !email || !mensagem) {
      Alert.alert('ERRO', 'Por favor preencha todos os campos');
      return;
    }
    Alert.alert('Mensagem enviada', ` Obrigado, ${nome}! Retornaremos em breve.`);
    setNome('');
    setEmail('');
    setMensagem('');
  }
  return (
    <View style={styles.section}>
      <Text styles={styles.section}>Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput style={styles.input}
        placeholder="Email"
        value={email}
        onChargeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Mensagem"
        value={Mensagem}
        onChangeText={setMensagem}
        multiline
      />
      <touchableOpacity style={styles.button} onPress={enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </touchableOpacity>

    </View>
  );
}
function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={{ color: 'white' }}>2025 minha Empresa. Todos os direitos reservados</Text>
    </View>
  );

}
const styles = StylesSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fa'
  },
  header: {
    backgroundColor: '#004080',
    padding: 40,
    alingContent: 'center',
    alingIntems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12
  },
  nav: {
    flexDirection: 'rown',
    justifyCONtent: 'space-around'
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4
  },
  navButtonActive: {
    backgroundColo: '0066cc'
  },
  navButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  content: {
    padding: 20,
    flexGrow: 1
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWeight: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#00480',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  footer: {
    backgroundColor: '#00264d',
    padding: 15,
    alignItems: 'center'
  },
});