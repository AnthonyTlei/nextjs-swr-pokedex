import { Pokemon } from "@/models/pokemon";
import api from "./axios-instance";

export async function getPokemon(name: string) {
  const response = await api.get<Pokemon>(`/pokemon/${name}`);
  return response.data;
}

export async function getPokemonPage(page: number) {
  const pageSize = 12;
  const response = await api.get(
    `/pokemon?limit=${pageSize}&offset=${pageSize * (page - 1)}`
  );
  return response.data;
}
