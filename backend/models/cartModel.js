const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({

  
    gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game"
    },
    quantity: 
      {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be lesser than one'],
      },
    price: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  { 
    timestamps: true 
  });

  const CartSchema = new Schema({

    items: [ItemSchema],
    subTotal: {
      default: 0,
      type: Number
    }
  },
  { 
    timestamps: true 
  });




const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;
