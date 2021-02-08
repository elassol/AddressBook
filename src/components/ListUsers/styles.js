import styled from 'styled-components';

export const WrapperHeaderPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const UserPageWrapper = styled.div`
  display: block;
  max-width: 100%;
  padding: 0;
  margin: 0 auto;
`;

export const SubTitlePage = styled.h2`
  font-family:  ${props => props.theme.font.primary};
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.color.darkPink};
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
  background-color:${props => props.theme.color.pink};
  transition: background-color 400ms ease;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.color.lightPink};
    transition: background-color 400ms ease;
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
  color: ${props => props.theme.color.darkPink}
`;

export const EmailWrapper = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.5px;
`;

export const ButtonStyle = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 18px;
  border: none;
  outline: 0;
  display: block;
  padding: 10px 22px;
  color: white;
  background-color: #034f84;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    background-color: #92a8d1;
  }
`;

export const OutLineButton = styled(ButtonStyle)`
  font-size: 15px;
  padding: 5px 11px;
  background: transparent;
  border: 2px solid #034f84;
  color: #034f84;

  &:hover {
    background-color: #034f84;
    color: #fff;
  }
`;
