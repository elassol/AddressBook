import styled from 'styled-components';

export const ListGroup = styled.ul`
  list-style: none;
  display: block;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
  max-width: 540px;
  margin: 0 1px 1px 0;
  padding: 12px 20px;
  background: #ededed;
`;

export const AvatarWrapper = styled.span`
  display: block;
  width: 35px;
  height: auto;
`;

export const TextWrapper = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin: 0 10px;
`;
