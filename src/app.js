import React, { useEffect, useState } from 'react';
import { CardComponent } from './components/leftContainer/card-component';
import { ItemDetails } from './components/rightContainer/item-details';
import {
  AppContainer,
  CardWrapper,
  ItemDetailsWrapper,
  MainContainer,
  LoadMoreWrapper,
} from './parts';
import { GlobalStyle } from './global-style';
import { API_URL, ITEM_URL, COMPONENT_NAME } from './constants';

export function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(API_URL);
  const [itemDetails, setItemDetails] = useState();

  const createPokemonObject = (pokemonList) => {
    const promises = pokemonList.map((pokemon) => {
      return fetch(`${ITEM_URL}${pokemon.name}`).then((res) => res.json());
    });
    return Promise.all(promises).then((data) => {
      setAllPokemon((currentList) => [...currentList, ...data]);
      return data;
    });
  };

  const getAllPokemon = () => {
    return fetch(loadMore)
      .then((res) => res.json())
      .then((data) => {
        setLoadMore(data.next);
        return createPokemonObject(data.results);
      });
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <CardWrapper>
        <h1>{COMPONENT_NAME.defaultName}</h1>
        <MainContainer>
          <CardComponent data={allPokemon} handleInfo={(item) => setItemDetails(item)} />
        </MainContainer>
        <LoadMoreWrapper onClick={() => getAllPokemon()}>
          {COMPONENT_NAME.buttonName}
        </LoadMoreWrapper>
      </CardWrapper>
      <ItemDetailsWrapper>
        <ItemDetails data={itemDetails} />
      </ItemDetailsWrapper>
    </AppContainer>
  );
}
