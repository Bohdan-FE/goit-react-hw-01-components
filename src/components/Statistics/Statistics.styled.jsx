import styled from '@emotion/styled';
import { getRandomHexColor } from '../../Helpers/RandomColor';

export const StatisticsSection = styled.section`
  margin: 0 auto 22px;
  width: 350px;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Item = styled.li`
  background-color: ${props => getRandomHexColor()};
  width: calc(100% / 5);
  border: 1px #676767 solid;
  padding: 12px 0;
  text-align: center;
`;

export const Title = styled.h2`
  text-align: center;
  width: 100%;
  background-color: #f3f1fd;
  padding: 12px;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 4px;
`;
export const Persentage = styled.span`
  font-weight: 700;
`;
