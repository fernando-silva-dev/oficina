# Oficina react native

## Introdução
Código-fonte usado como base para uma oficina introdutória de react-native, o foco era praticidade e facilidade de entendimento, portanto não obedece todas as melhores práticas.

## Docs das bibliotecas usadas
- [React native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started/)
- [Material](https://www.react-native-material.com/)
- [Axios](https://www.npmjs.com/package/react-native-axios)
- [Formik](https://formik.org/)
- [Yup](https://www.npmjs.com/package/yup)

## Passo a passo alto nível (Da oficina em si, não do fonte)
- Criação de um app chamado oficina
    ```bash
    npx create-expo-app Oficina
    cd Oficina
    ```

- Instalação dos pacotes necessários para execução web
    ```
    npx expo install react-dom react-native-web @expo/webpack-config
    ```

- Observar rodando
    ```bash
    npm run web
    ```

- Instalar biblioteca de navegação
    ```bash
    npm install @react-navigation/native @react-navigation/native-stack
    npx expo install react-native-screens react-native-safe-area-context
    ```

- Demonstrar navegação

- Instalar biblioteca de estilização
    ```bash
    npm install @react-native-material/core
    ```

- Separar telas em arquivos separados

- Instalar biblioteca de comunicação rest
    ```bash
    npm install axios
    ```

- Configurar e demonstrar requisições (via console)

- Listagem de pessoas
    - Demonstrar apresentar hook de efeito de foco do navigation
    - Apresentar Flatlist
    - Apresentar touchable

- Renderizar um card para cada pessoa

- Instalar biblioteca de formulários
    ```bash
    npm install formik
    ```

- Demonstrar formulário (form de pessoa)

- Buscar dados de pessoa para mostrar no form

- Enviar dados de pessoa para a API

- Fluxo de adição
    - Adicionar pacote de ícones
        ```
        npm install @expo/vector-icons
        ```
    - Adicionar botão flutuante para acessar a tela do formulário sem id
    - Separar fluxo de visualização, edição e adição
    - editMode no state da tela

- Gerar erro de comunicação da API por falta de validação
    - Explicar a importância da validação
    - Instalar biblioteca de validação
        ```bash
        npm install yup
        ```
    - Demonstrar validação

## Rodar backend
O passo a passo para rodar o backend se encontra [aqui](./steps-backend/passo%20a%20passo%20backend.md)

- Fim
    - Sugestões de continuidade
        - Adicionar máscara nos campos de texto
        - Adicionar popups de confirmação
        - Validação de número de telefone
        - Fazer rodar no celular
        - Adicionar seleção de imagem
        - Adicionar typescript
        - Adicionar modo noturno
