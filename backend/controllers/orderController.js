import Razorpay from 'razorpay';
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Global variables
const currency = 'INR';
const deliveryCharge = 10;

// Gateway initialization
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
      return res.json({ success: false, message: 'All fields are required' });
    }

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'COD',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: 'Order placed successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    if (!userId || !items || !amount || !address) {
      return res.json({ success: false, message: 'All fields are required' });
    }

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'Razorpay',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: amount * 100, // Amount in smallest currency unit
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };

    const order = await razorpayInstance.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const verifyRazorpay = async (req,res)=>{
  try {
    const {userId,razorpay_order_id}=req.body

    const orderInfo=await razorpayInstance.orders.fetch(razorpay_order_id)
    if (orderInfo.status==='paid') {
        await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true});
        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true,message:'payment successful'})
    }

    else{
        res.json({success:false,message:'payment failed'})
    }
    
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
}


// All orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// User order data for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.json({ success: false, message: 'User ID is required' });
    }

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Update orders status from admin panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res.json({ success: false, message: 'Order ID and status are required' });
    }

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: 'Order status updated successfully' });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { verifyRazorpay,placeOrder, placeOrderRazorpay, allOrders, userOrders, updateStatus };
