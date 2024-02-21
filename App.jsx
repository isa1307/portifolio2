import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from './src/components/ProfileCard';

export default function App() {
  const alunos = [
    {
      picture: require("./assets/isabela2.jpg"),
      name: `Isabela Souza💋`,
      course: `Desenvolvimento de Sistemas`,
      bio: `I am a software developer who loves to write code and help people.`,

    },
    {
    /*   picture: require("./assets/luiza.jpg"), */
      name: `Luiza Alves👩‍💻`,
      course: `Desenvolvimento de Sistemas`,
      bio: `I am a software developer who loves to write code and help people.`,
    },
    {
    /*   picture: require("./assets/luiza.jpg"), */
      name: `Luiza Alves👩‍💻`,
      course: `Desenvolvimento de Sistemas`,
      bio: `I am a software developer who loves to write code and help people.`,
    },
  ];
  return (
    <View style={styles.container}>
      <ProfileCard
       listaAlunos={alunos}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
