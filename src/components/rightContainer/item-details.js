import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IMG_URL, COMPONENT_NAME, CARD_DESCRIPTION } from '../../constants';
import { DetailWrapper, ContentCard, Wrapper, Table, Td, EmptyContent } from './parts';

export const ItemDetails = ({ data }) => {
  const [details, setDetails] = useState({
    currentType: '',
    currentAttack: 0,
    currentDefense: 0,
    currentHP: '',
    currentSpDefense: 0,
    currentSpeed: 0,
    currentWeight: 0,
    currentTotalMoves: 0,
  });

  useEffect(() => {
    if (data) {
      setDetails({
        currentType: data.types[0].type.name,
        currentAttack: data.stats[1].base_stat,
        currentDefense: data.stats[2].base_stat,
        currentHP: data.stats[0].base_stat,
        currentSpDefense: data.stats[4].base_stat,
        currentSpeed: data.stats[5].base_stat,
        currentWeight: data.weight,
        currentTotalMoves: data.moves.length,
      });
    }
  }, [data]);

  const dataDescription = [
    { column1: CARD_DESCRIPTION.cardTypes, column2: details.currentType },
    { column1: CARD_DESCRIPTION.cardAttack, column2: details.currentAttack },
    { column1: CARD_DESCRIPTION.cardDefense, column2: details.currentDefense },
    { column1: CARD_DESCRIPTION.cardHP, column2: details.currentHP },
    { column1: CARD_DESCRIPTION.cardSpDefense, column2: details.currentSpDefense },
    { column1: CARD_DESCRIPTION.cardSpeed, column2: details.currentSpeed },
    { column1: CARD_DESCRIPTION.cardWeight, column2: details.currentWeight },
    { column1: CARD_DESCRIPTION.cardTotalMoves, column2: details.currentTotalMoves },
  ];

  return (
    <Wrapper>
      {data ? (
        <ContentCard>
          <div>
            <img src={`${IMG_URL}${data.id}.svg`} alt="data.name" />
            <h3>{data.name}</h3>
          </div>
          <DetailWrapper>
            <Table>
              <tbody>
                {dataDescription.map((row) => (
                  // eslint-disable-next-line react/jsx-key
                  <tr key={row.column1}>
                    <Td>{row.column1}</Td>
                    <Td>{row.column2}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </DetailWrapper>
        </ContentCard>
      ) : (
        <EmptyContent>
          <h3>{COMPONENT_NAME.contentDescription}</h3>
        </EmptyContent>
      )}
    </Wrapper>
  );
};

ItemDetails.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        dream_world: PropTypes.shape({
          front_default: PropTypes.string,
        }),
      }),
    }),
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ),
    attack: PropTypes.number,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        base_stat: PropTypes.number,
        stat: PropTypes.shape({
          name: PropTypes.string,
        }),
      }),
    ),
    weight: PropTypes.number,
    moves: PropTypes.arrayOf(PropTypes.shape({})),
  }),
};
