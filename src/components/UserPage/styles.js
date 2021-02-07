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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.5px;
`;

export const CardView = styled.div`
  display: flex;
  border: 1px solid #999;
`;

export const AvatarWrapper = styled.img`
  display: block;
  width: 50%;
  height: auto;
  margin: 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 25px 12px;
  margin: 0;
  background-color: #f7cac9;
`;

export const NameStyle = styled.h3`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin: 0 0 10px;
`;

export const EmailWrapper = styled.a`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.5px;
  margin-bottom: 36px;
  color: #034f84;
  text-decoration: none;

  &:hover {
    color: #92a8d1;
  }
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
