import React from 'react';
import PropTypes from 'prop-types';
import { DetailWrapper, ContentCard } from './parts';

export const CardComponent = ({ data, handleInfo }) => {
  return (
    <>
      {data.map((items) => (
        <ContentCard key={items.id} onClick={() => handleInfo(items)}>
          <img src={items.sprites.other.dream_world.front_default} alt={items.name} />
          <DetailWrapper>
            <div>{items.name}</div>
            <div className={items.types[0].type.name}>{items.types[0].type.name}</div>
          </DetailWrapper>
        </ContentCard>
      ))}
    </>
  );
};

CardComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
  handleInfo: PropTypes.func.isRequired,
};
