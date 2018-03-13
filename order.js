const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.status(200).json({
        message: 'Orders were created'
    });
});


router.post('/', (req, res, next) => {

    order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(200).json({
        message: 'Orders were created post',
        order : order
    })

});

router.get('/:orderID', (req, res, next) => {

    res.status(200).json({
        message: 'Orders were created post',
        orderID: req.params.orderID
    })

});

router.delete('/:orderID', (req, res, next) => {

    res.status(200).json({
        message: 'Orders were deleted',
        orderID: req.params.orderID
    })

});


module.exports = router;