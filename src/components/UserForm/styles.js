import styled from 'styled-components';

export const WrapperHeaderPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const EditPageWrapper = styled.div`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;

`;

export const SubTitlePage = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.5px;
  margin: 0 0 12px;
`;

export const FormBlock = styled.div`
  display: block;
  margin: 12px 0;
`;

export const InputFields = styled.input`
  border: 2px solid #034f84;
  border-radius: 4px;
  padding: 5px 8px;

  &:focus {
    border: 2px solid #92a8d1;
  }
`;

export const ButtonStyle = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  line-height: 16px;
  border: none;
  outline: 0;
  display: block;
  padding: 8px 11px;
  color: white;
  background-color: #034f84;
  text-align: center;
  cursor: pointer;
  font-size: 15px;
  text-decoration: none;
  margin-bottom: 12px;

  &:hover {
    background-color: #92a8d1;
  }
`;

export const LabelFieldsForm = styled.span`
  display: block;
  margin: 0 0 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #034f84;
`;

export const FormStyles = styled.form`
  display: block;
  width: 35%;
  padding: 0 24px;
`;

export const FormWarpper = styled.div`
  display: flex;
  border: 2px solid #034f84;
  background: #f7cac9;
`;

export const AvatarWrapper = styled.div`
  display: block;
  width: 65%;
  height: auto;
  margin: 0;

  & > img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
