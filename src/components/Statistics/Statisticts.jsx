import PropTypes from 'prop-types';
import {
  Label,
  StatisticsSection,
  Title,
  Persentage,
  Item,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title &&  <Title>{title}</Title>}
      <ul className="stat-list">
        {stats.map(obj => {
          return (
            <Item key={obj.id}>
              <Label>{obj.label}</Label>
              <Persentage>{obj.percentage}%</Persentage>
            </Item>
          );
        })}
      </ul>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    persentage: PropTypes.number,
  }),),
};
