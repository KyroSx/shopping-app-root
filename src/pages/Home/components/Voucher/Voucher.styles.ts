import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: ${props => props.theme.space.x10};

  padding: ${props => `${props.theme.space.x6} ${props.theme.space.x12}`};
`;
