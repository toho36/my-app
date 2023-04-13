import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>30.4.2022</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$300</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
