import { StatusBar } from "expo-status-bar";
import {
  Image,
  ScrollView,
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
  flex: 1;
  flex-direction: row;
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

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const BtnHome = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

export default function Home({ navigation }) {
  return (
    <Container>
      <ScrollView>
        <ContainerView>
          <ContainerButton>
            <BtnHome onPress={() => navigation.navigate("Agenda")}>
              <Image source={require("../../assets/agenda.png")} />
              <Text>Agenda</Text>
            </BtnHome>

            <BtnHome onPress={() => navigation.navigate("Palestrantes")}>
              <Image source={require("../../assets/palestrantes.png")} />
              <Text>Palestrantes</Text>
            </BtnHome>
          </ContainerButton>
          <ContainerButton>
            <BtnHome onPress={() => navigation.navigate("Artigos")}>
              <Image source={require("../../assets/artigos.png")} />
              <Text>Artigos</Text>
            </BtnHome>
            <BtnHome onPress={() => navigation.navigate("Sac")}>
              <Image source={require("../../assets/sac.png")} />
              <Text>Sac</Text>
            </BtnHome>
          </ContainerButton>
        </ContainerView>
      </ScrollView>
    </Container>
  );
}
0;
