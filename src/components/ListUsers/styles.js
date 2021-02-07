import styled from 'styled-components';

export const SubTitlePage = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.5px;
`;

export const ListGroup = styled.div`
  list-style: none;
  display: block;
  max-width: 540px;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
`;

export const ListItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  max-width: 540px;
  margin: 0 1px 1px 0;
  padding: 14px 24px;
  background: #f7cac9;

  &:hover {
    background: #eea29a;
    cursor: pointer;
  }
`;

export const AvatarWrapper = styled.img`
  display: block;
  width: 75px;
  height: auto;
  margin-right: 15px;
`;

export const TextWrapper = styled.span`
  padding: 0;
  margin: 0;
`;

export const NameStyle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-weight: bold;
  line-height: 17px;
  letter-spacing: 0.5px;
  margin: 0;
`;

export const EmailWrapper = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.5px;
`;
