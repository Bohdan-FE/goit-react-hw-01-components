import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  background-color: #f3f1fd;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: black;
  padding-top: 30px;
  position: relative;
  width: 300px;
  max-width: 100%;
  text-align: center;
  margin: 0 auto 22px;
  img {
    margin: 0 auto 8px;
    width: 60%;
    border-radius: 50%;
    border: 1px solid #03bfcb;
    border-radius: 50%;
    padding: 7px;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const Tag = styled.p`
  font-weight: 400;
  font-style: italic;
  margin-bottom: 6px;
`;

export const Location = styled.p`
  margin-bottom: 18px;
  svg {
    margin-right: 4px;
  }
`;
export const StatList = styled.ul`
  display: flex;
  align-items: center;
  li {
    background-color: #e2e1e9;
    width: calc(100% / 3);
    border: 1px #676767 solid;
    padding: 12px 0;
  }
`;
export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;
