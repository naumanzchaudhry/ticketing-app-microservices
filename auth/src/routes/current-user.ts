import express from 'express';
import { DatabaseConnectionError } from '../errors/db-connection-error';
const router = express.Router();

router.get('/api/users/me', (req, res) => {
    res.send({name: 'Current User'});
})


export { router as currentUserRouter};