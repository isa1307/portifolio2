import React from "react";
import { View, Text, Image } from "react-native";

const ProfileCard = ({ listaAlunos }) => {
    return (
        <View>
            {listaAlunos.map((aluno, index) => {
                return (
                    <View key={index}>
                        <Image
                            source={aluno.picture}
                            style={styles.profilePicture}
                        />
                        <Text>{aluno.name}</Text>
                        <Text>{aluno.course}</Text>
                        <Text>{aluno.bio}</Text>
                    </View>
                );
            })}
        </View>
    );
}
const styles = {    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePicture: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },

};
export default ProfileCard;