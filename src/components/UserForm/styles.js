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
  padding: 25px 15px;
  border: 2px solid #034f84;
`;

export const SubTitlePage = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.5px;
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

export const LabelFieldsForm = styled.span`
  display: block;
  margin: 0 0 5px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: #034f84;
`;
