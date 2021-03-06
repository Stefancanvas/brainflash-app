import { Ratings } from '@ui/ratings/ratings.component';
import React from 'react';
import {
  DeckImg,
  DescriptionContainer,
  RatingsContainer,
  StyledListItem,
  StyledTitle,
  StyledLink,
} from './deck-list-item.styles';

interface DeckListItemProps {
  id: string;
  name: string;
  rating: number;
  numberOfRatings: number;
  thumbnailUrl?: string;
  active?: boolean;
}

export const DeckListItem = ({
  id,
  name,
  rating,
  numberOfRatings,
  active = false,
  thumbnailUrl,
}: DeckListItemProps) => (
  <StyledListItem active={active}>
    <StyledLink to={`/deck-details/${id}`}>
      <DeckImg imgUrl={thumbnailUrl} />
      <DescriptionContainer>
        <StyledTitle>{name}</StyledTitle>
        <RatingsContainer>
          <Ratings ratings={rating} numberOfRatings={numberOfRatings} />
        </RatingsContainer>
      </DescriptionContainer>
    </StyledLink>
  </StyledListItem>
);
