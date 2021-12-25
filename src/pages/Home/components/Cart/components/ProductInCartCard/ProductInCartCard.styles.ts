import styled from 'styled-components';

export const Card = styled.div`
  border: grey 1px dotted;
  border-radius: ${props => props.theme.space.x4};

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${props => props.theme.space.x6};
`;

export const Content = styled.div`
  padding: ${props => props.theme.space.x4};
  width: 100%;
`;

export const Image = styled.div`
  height: 72px;
  width: 72px;

  background: ${props => props.theme.colors.neutral.x300};

  border-radius: ${props =>
    `${props.theme.space.x4} 0 0 ${props.theme.space.x4}`};
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: ${props => props.theme.font.size.m};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${props => props.theme.space.x6};

  color: ${props => props.theme.colors.gray.x800};
  margin-top: ${props => props.theme.space.x6};

  justify-content: space-between;
`;
