const cartRepository = require("../routes/cartRepository")

const gameRepository = require("../routes/repository")

exports.addItemToCart = async (req, res) => {
    const {
        gameId
    } = req.body;

   const quantity = Number.parseInt(req.body.quantity);

   try {
       let cart = await cartRepository.cart();

       let gameDetails = await gameRepository.gameById(gameId);

       if (!gameDetails) {
        
        return res.status(500).json({
            type: "Not Found",
            msg: "Invalid request"
        })
       }
       // if cart exists

       else if (cart) {

      // check if index exists
      const indexFound = cart.items.findIndex(item => {

        item.gameId === gameId
      });
        

      // This removes an item from the cart if 
      // the quantity is set to zero

      // we can use this method to remove an item from the list

      if (indexFound !== -1 && quantity <= 0) {
          cart.items.splice(indexFound, 1);
          if (cart.items.length == 0) {
              cart.subTotal = 0;
          } else {
              cart.subTotal = cart.items.map(item => item.subTotal).reduce((acc, next) => acc + next)
          }
      }

        //  Check if product exist,
        // add the previous quantity with the
        // new quantity and update the total price
        else if ( indexFound !== -1) {
            cart.items[indexFound].quantity =
            cart.items[indexFound].quantity + quantity;

            cart.items[indexFound].total = 
            cart.items[indexFound].quantity * gameDetails.price;

            cart.items[indexFound].price = gameDetails.price;
            cart.subTotal = cart.items.map(item => 
              item.total).reduce((acc, next) => acc + next)
        }

        // check if quantity is greater than 0 then add item to items array

        else if(quantity > 0) {

            cart.items.push({
                gameId: gameId,
                quantity: quantity,
                price: gameDetails.price,
                total: parseInt(gameDetails.price * quantity)
            })
            cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
        }

        // if quantity of price is 0 throw error

        else {
            return res.status(400).json({
                type: "Invalid",
                msg: "Invalid request"
            })
        }
        let data = await cart.save();
        res.status(200).json({
            type: "success",
            msg: "Process Successful",
            data: data
        })
       }

     // if there is no user with a cart...it creates a new cart and 
     // then adds the item to the cart that has been created

       else {
           const cartData = {
               items: [{
                   gameId: gameId,
                   quantity: quantity,
                   total: parseInt(gameDetails.price * quantity),
                   price: gameDetails.price
               }],
               subTotal: parseInt(gameDetails.price * quantity)
           }
           cart = await cartRepository.addItem(cartData)

           // let data = await cart.save();
           res.json(cart);
       }
   } catch (err) {
       console.log(err)
       res.status(400).json({
           type: "Invalid",
           msg: "Something went wrong",
           err: err
       })
   }

}

exports.getCart = async (req, res) => {
    try {
        let cart = await cartRepository.cart()
        if (!cart) {
            return res.status(400).json({
                type: "invalid",
                msg: "Cart not found",
            })
        }
        res.status(200).json({
            status: true,
            data: cart
        })
    } catch (err) {
     console.log(err)

     res.status(400).json({
         type: "Invalid",
         msg: "Something went wrong",
         err: err
     })
    }
}


exports.emptyCart = async (req, res) => {
    try {
        let cart = await cartRepository.cart();
        cart.items = [];
        cart.subTotal = 0;

        let data = await cart.save();
        res.status(200).json({
            type: "Success",
            msg: "Cart has been emptied",
            data: data
        })
    } catch (err) {
        console.log(err)

        res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: err
        })
    }
}