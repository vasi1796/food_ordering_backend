import express, { Router } from 'express';
// Import index action from movies controller
import { index } from './controllers/menus';
import { index1,index2 } from './controllers/orders';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/menus.json')
  .get(index);

router.route('/order')
  .post(index1);

  router.route('/order.json')
  .get(index2);

export default router;

