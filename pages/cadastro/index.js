import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styled from "styled-components";

const Container = styled.View`
  flex: 2;
  align-items: "center";
  justify-content: "flex-start";
`;

const ViewImage = styled.View`
  margin: 63px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const ImageLogo = styled(Image)``;

const ContainerCampos = styled.View`
  margin: 0px 55px;
`;

const LabelCampo = styled.Text`
  font-size: 15px;
  color: #408187;
`;

const InputCampo = styled.TextInput`
  background-color: #d9d9d9;
  height: 40px;
  border-radius: 0px 15px 15px 15px;
`;

const ContainerButton = styled.View`
  align-items: "center";
  justify-content: "center";
  margin: 20px 120px;
`;

const Btn = styled.TouchableOpacity`
  background-color: #408187;
  border-radius: 16px;
  height: 40px;
  margin-top: 20px;
`;

const TxtBnt = styled.Text`
  margin: 11px 56px;
  color: #18dfe9;
`;

const TxtLivre = styled.Text`
  font-size: 20px;
  color: #408187;
  text-align: center;
  margin-top: 20px;
`;

const ContainerTxtLivre = styled.View`
  justify-content: "center";
  align-items: "center";
  margin-top: 20px;
`;

export default function Login() {
  return (
    <Container>
      <ViewImage>
        <ImageLogo
          source={require("../../assets/imgperfil.png")}
          alt="Imagem da Logo na tela de login"
        />
      </ViewImage>
      <ContainerCampos>
        <View>
          <LabelCampo>Nome</LabelCampo>
          <InputCampo></InputCampo>
        </View>
        <View>
          <LabelCampo>E-mail</LabelCampo>
          <InputCampo></InputCampo>
        </View>
        <View>
          <LabelCampo>RA</LabelCampo>
          <InputCampo></InputCampo>
        </View>
        <View>
          <LabelCampo>Senha</LabelCampo>
          <InputCampo></InputCampo>
        </View>
      </ContainerCampos>
      <ContainerButton>
        <Btn>
          <TxtBnt>Cadastrar</TxtBnt>
        </Btn>
      </ContainerButton>
    </Container>
  );
}
0;
