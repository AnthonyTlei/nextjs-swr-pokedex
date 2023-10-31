import { Metadata } from "next";
import PokemonDetails from "./pokemon-details";

interface PokemonPageProps {
  params: {
    pokemon: string;
  };
}

export async function generateMetadata({
  params: { pokemon: pokemonName },
}: PokemonPageProps): Promise<Metadata> {
  return {
    title: `${pokemonName} - Pokedex`,
  };
}

export default function PokemonPage({
  params: { pokemon: pokemonName },
}: PokemonPageProps) {
  return <PokemonDetails pokemonName={pokemonName} />;
}
