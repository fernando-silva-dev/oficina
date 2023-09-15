import axios from "axios";

export async function GetPessoas() {
  let response = await Api.get("pessoa");
  return response.data;
}

export async function GetPessoa(id) {
  let response = await Api.get(`pessoa/${id}`);
  return response.data;
}

export async function AddPessoa(pessoa) {
  await Api.post("pessoa", pessoa);
}

export async function UpdatePessoa(id, pessoa) {
  await Api.put(`pessoa/${id}`, pessoa);
}

export async function DeletePessoa(id) {
  await Api.delete(`pessoa/${id}`);
}

const Api = axios.create({
  // Esse IP vai ser diferente no dia
  baseURL: "http://localhost:5000/",
  timeout: 1000,
  // Cada um deve usar um id diferente para não impactarem nos dados dos outros
  headers: { clientId: "" },
});
