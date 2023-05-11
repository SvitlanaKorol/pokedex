import React from 'react';
import PropTypes from 'prop-types';
import { IMG_URL, COMPONENT_NAME, CARD_DESCRIPTION } from '../../constants';
import { getDataDescription } from './helpers';
import {
  DetailWrapper,
  ContentCard,
  DescriptionWrapper,
  Wrapper,
  Table,
  Td,
  EmptyContent,
} from './parts';

export const ItemDetails = ({ data }) => {
  const dataDescription = data ? getDataDescription(CARD_DESCRIPTION, data) : [];

  return (
    <Wrapper>
      {data ? (
        <ContentCard>
          <div>
            <img src={`${IMG_URL}${data.id}.svg`} alt="data.name" />
            <DescriptionWrapper>
              <h4>
                {data.name}
                <span>&nbsp;&#35;{data.id}</span>
              </h4>
            </DescriptionWrapper>
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
