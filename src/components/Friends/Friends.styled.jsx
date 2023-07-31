import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 300px;
  margin: 0 auto 22px;
  li {
    background-color: #f3f1fd;
    padding: 5px 24px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    img {
      margin-right: 12px;
    }
    p {
      font-weight: 600;
    }
  }
`;

export const OnlineIndicator = styled.span`
  display: block;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 12px;
`;
