import { View, StyleSheet, Text } from "react-native";
import { Button, TextInput } from "@react-native-material/core";
import { GetPessoa, DeletePessoa, AddPessoa, UpdatePessoa } from "../Api";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";

export function TelaPessoa({ navigation, route }) {
  // TODO: Visualização dos erros de validação
  // TODO: verificar se faz sentido adicionar seleção de data, parece ser difícil
  // TODO: verificar se faz sentido adicionar seleção de imagem, parece ser difícil
  useEffect(() => {
    if (route.params.id !== null) {
      GetPessoa(route.params.id).then(setPessoa);
    }
  }, []);

  const esquemaValidacao = Yup.object().shape({
    nome: Yup.string()
      .max(50, "Nome muito longo!")
      .required("Campo obrigatório"),
    telefone: Yup.string()
      .min(11, "Deve ter 11 caracteres!")
      .max(11, "Deve ter 11 caracteres!")
      .required("Campo obrigatório"),
    email: Yup.string().email("e-mail inválido").required("Campo obrigatório"),
  });

  const [pessoa, setPessoa] = useState({ email: "", nome: "", telefone: "" });
  const [editMode, setEditMode] = useState(false);
  const addMode = route.params.id == null;

  async function salvarPessoa(pessoa) {
    if (addMode) {
      await AddPessoa(pessoa);
    } else {
      await UpdatePessoa(route.params.id, pessoa);
    }
    navigation.goBack();
  }

  async function deletePessoa(id) {
    await DeletePessoa(route.params.id);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Formik
        enableReinitialize={true}
        initialValues={pessoa}
        onSubmit={salvarPessoa}
        validationSchema={esquemaValidacao}
      >
        {({ handleChange, handleBlur, handleSubmit, resetForm, errors, values }) => {
          const botoes = [];
          if (addMode || editMode) {
            if (editMode) {
              botoes.push(
                <Button
                  style={styles.botao}
                  onPress={() => {
                    resetForm(pessoa);
                    setEditMode(false);
                  }}
                  title="Cancelar"
                />
              );
            }
            botoes.push(
              <Button
                style={styles.botao}
                onPress={handleSubmit}
                title="Salvar"
              />
            );
          } else {
            botoes.push(
              <Button
                style={styles.botao}
                onPress={() => setEditMode(true)}
                title="Editar"
              />
            );
            botoes.push(
              <Button
                style={styles.botao}
                onPress={deletePessoa}
                title="Deletar"
                color="error"
              />
            );
          }

          return (
            <View>
              <TextInput
                onChangeText={handleChange("nome")}
                onBlur={handleBlur("nome")}
                value={values.nome}
                editable={addMode || editMode}
                placeholder="Digite seu nome"
                variant="outlined"
                textContentType="name"
              />
              <Text style={styles.problemaValidacao}>{errors.nome}</Text>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                textContentType="emailAddress"
                editable={addMode || editMode}
                placeholder="Digite seu e-mail"
                variant="outlined"
              />
              <Text style={styles.problemaValidacao}>{errors.email}</Text>
              <TextInput
                onChangeText={handleChange("telefone")}
                onBlur={handleBlur("telefone")}
                value={values.telefone}
                editable={addMode || editMode}
                textContentType="telephoneNumber"
                placeholder="Digite seu telefone"
                variant="outlined"
              />
              <Text style={styles.problemaValidacao}>{errors.telefone}</Text>
              {botoes}
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
  },
  problemaValidacao: {color: 'red'},
  botao: {
    margin: 4,
  },
});
