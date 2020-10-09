import styled from 'styled-components';

interface StyledImageProps {
  imageUrl?: string;
}

export const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled.div<StyledImageProps>`
  height: 400px;
  width: 50%;
  background-color: rgba(95, 129, 244, 0.3);
  border-radius: 40px;
  ${({ imageUrl }) => imageUrl && `background: url('${imageUrl}') center/cover`};
`;

export const ActionsContainer = styled.section`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 31px;
  text-align: center;
  margin-bottom: 15px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    width: 80%;
    height: 50px;
    border-radius: 30px;
    font-weight: 500;
  }

  & > button:first-child {
    margin-bottom: 15px;
  }
`;

export const DescriptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const DescriptionTitle = styled.h3`
  font-size: 23px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 19px;
  line-height: 30px;
`;