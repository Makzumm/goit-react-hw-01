import css from './TransactionHistory.module.css'
import PropTypes from 'prop-types';

function TransactionHistory({ items }) {

    function toCapitalized(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    return (
        <>
            <table className={css.table}>
                <thead className={css.tableHead}>
                    <tr className={css.tableRow}>
                        <th className={css.tableHeader}>Type</th>
                        <th className={css.tableHeader}>Amount</th>
                        <th className={css.tableHeader}>Currency</th>
                    </tr>
                </thead>

                <tbody className='table-body'>
                    {items.map(({ id, type, amount, currency }) => {
                        return (
                            <tr key={id} className={css.tableRow}>
                                <td className={css.tableData}>{toCapitalized(type)}</td>
                                <td className={css.tableData}>{amount}</td>
                                <td className={css.tableData}>{currency}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

TransactionHistory.propType = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionHistory

