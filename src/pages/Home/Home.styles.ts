import styled from 'styled-components';

export const Container = styled.div`
  padding: ${props => props.theme.space.x6};

  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 12px;
`;
