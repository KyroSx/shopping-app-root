import styled from 'styled-components';

export const Card = styled.div`
  margin: 12px 0;
  border-radius: 6px;
  max-width: 300px;

  background: #efefef;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.24);
`;

export const Content = styled.div`
  gap: 12px;
  padding: 8px;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const Available = styled.p``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;

  color: #444444;
  margin-top: 6px;
`;

export const BuyButton = styled.button`
  width: 100%;
  background: black;
  color: white;
  border: 0;
  border-radius: 0 0 6px 6px;
  margin-top: 8px;

  padding: 4px;
`;
