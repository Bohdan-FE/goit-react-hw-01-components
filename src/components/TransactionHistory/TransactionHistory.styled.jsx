import styled from '@emotion/styled';

export const Table = styled.table`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;
  &,
  th,
  td,
  thead,
  tr {
    border: 1px solid white;
  }
  td,
  th {
    padding: 12px 0;
    width: calc(100% / 3);
  }
  td:nth-of-type(1) {
    text-align: start;
    padding-left: 42px;
    padding-right: 42px;
  }

  thead {
    background-color: #82b6ed;
  }
  th {
    color: white;
  }
  tr:nth-of-type(even) {
    background-color: #bfd8f3;
  }
`;
