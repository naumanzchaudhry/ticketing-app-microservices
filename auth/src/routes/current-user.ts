import express from 'express';
const router = express.Router();

router.get('/api/users/me', (req, res) => {
    res.send({name: 'Current User'});
})


export { router as currentUserRouter};