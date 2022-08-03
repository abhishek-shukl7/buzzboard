const Orders = require("../models/orderModel");
const AppError = require("./../utils/appError");

exports.create = async (req, res, next) => {
    try {
        var data = {
            order_id : req.body.order_id,
            item_name : req.body.item_name,
            cost : req.body.cost,
            order_date : req.body.order_date,
            delivery_date : req.body.delivery_date
        };
        // console.log(data);
        const order = await Orders.create(data);
        // console.log(order);
        res.status(200);
        return res.json({
            message: 'Order Created.',
            success: true,
            data:order
        });
    } catch (error) {
        res.status(500);
        console.error(error);
        return res.json({
            message: error,
            success: false,
            data:[],
        });
    }

};

exports.update = async (req, res, next) => {
    try {
        var id = { order_id : req.body.order_id };
        var data = {
            delivery_date : req.body.delivery_date
        };
        // console.log(data);
        const orders = await Orders.updateOne(id,{$set:data});
        // console.log(orders);
        if(orders == null || orders == '' || orders.length == 0)
        {
            res.status(200);
            return res.json({
                message: 'Error in creating order.',
                success: false,
                data:[],
            });
        }

        res.status(200);
        return res.json({
            message: 'Order Updated.',
            success: true,  
            data:orders
        });
    } catch (error) {
        res.status(500);
        return res.json({
            message: error,
            success: false,
            data:[],
        });
    }
};
exports.list = async (req, res, next) => {
    
    try {
        const orders = await Orders.find({});
        // console.log(orders);
        if(orders == null || orders == '' || orders.length == 0)
        {
            res.status(200);
            return res.json({
                message: 'No order found.',
                success: false,
                data:[],
            });
        }

        res.status(200);
        return res.json({
            message: 'Data Found.',
            success: true,
            data:orders,
        });
    } catch (error) {
        console.error(error);
        res.status(500);
        return res.json({
            message: error,
            success: false,
            data:[],
        });
    }
};
exports.search = async (req, res, next) => {
    try {
        var id = { order_id : req.body.order_id }
        // console.log(id);
        const orders = await Orders.findOne(id);
        // console.log(orders);
        if(orders == null || orders == '' || orders.length == 0)
        {
            res.status(200);
            return res.json({
                message: 'No order found.',
                success: false,
                data:[],
            });
        }
        res.status(200);
        return res.json({
            message: 'Data Found.',
            success: true,
            data:orders,
        });
    } catch (error) {
        res.status(500);
        return res.json({
            message: error,
            success: false,
            data:[],
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        var id = { order_id : req.body.order_id }
        console.log(id);
        const orders = await Orders.deleteOne(id);
        console.log(orders);
        res.status(200);
        return res.json({
            message: 'Order deleted.',
            success: true,
            data:orders,
        });
    } catch (error) {
        res.status(500);
        return res.json({
            message: error,
            success: false,
            data:[],
        });
    }
};


