const express =require('express');
const router = express.Router();
let { people } = require('../data');

const {
    getPeople,
    createPeron,
    createPersonPostname,
    updatePerson,
    deletePerson
} = require('../controllers/people')


router.route('/').get(getPeople).post(createPeron)
router.route('/postman').post(createPersonPostname)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;