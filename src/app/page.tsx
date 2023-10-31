"use client";

import PokemonEntry from "@/components/PokemonEntry";
import useSWR from "swr";
import * as PokemonApi from "@/network/pokemon-api";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { usePathname, useRouter } from "next/navigation";

interface HomeProps {
  searchParams: {
    page: string;
  };
}

export default function Home({ searchParams: { page = "1" } }: HomeProps) {
  const router = useRouter();
  const pathname = usePathname();
  const pageNumber = parseInt(page);
  const { data, isLoading } = useSWR(
    ["getPokemonPage", pageNumber],
    async () => {
      return await PokemonApi.getPokemonPage(pageNumber);
    }
  );

  if (isLoading) {
    return <Spinner animation="border" className="d-block m-auto" />;
  }

  return (
    <main>
      <h1 className="text-center mb-4">Gotta cache &apos;em all</h1>
      <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
        {data?.results.map((pokemonEntry) => (
          <Col key={pokemonEntry.name}>
            <PokemonEntry name={pokemonEntry.name} />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center gap-2 mt-4">
        {data?.previous && (
          <Button
            onClick={() => {
              router.push(`${pathname}?page=${pageNumber - 1}`);
            }}
          >
            ⬅
          </Button>
        )}
        {data?.next && (
          <Button
            onClick={() => {
              router.push(`${pathname}?page=${pageNumber + 1}`);
            }}
          >
            ➡
          </Button>
        )}
      </div>
    </main>
  );
}
