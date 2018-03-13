const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'I am in get'
    });
});

router.post('/', (req, res, next) => {
        const product =  {
            name : req.body.name, 
            price : req.body.price
        }

    res.status(200).json({
        message: 'I am in post',
        pro : product
    });
});


router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'specialID') {
        console.log(id);
        res.status(200).json({
            message: 'You requested id of ' + id
        });
    }

    else {
        res.status(200).json({
            message: 'This is not a valid id'
        });
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'updated product'
    });

});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'deleted product'
    });
});


module.exports = router;