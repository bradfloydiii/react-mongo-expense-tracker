const express = require('express');
const router = express.Router();

const {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

router.route('/').post(addTransaction).get(getTransactions);
router.route('/:id').put(updateTransaction).delete(deleteTransaction);

module.exports = router;
