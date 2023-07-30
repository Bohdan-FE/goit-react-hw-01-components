import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(obj => <tr key={obj.id}>
          <td>{obj.type}</td>
          <td>{obj.amount}</td>
          <td>{obj.currency}</td>
        </tr>)}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.array,
}
