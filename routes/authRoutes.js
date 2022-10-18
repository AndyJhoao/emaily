const passport = require("passport");
const keys = require("../config/keys");
const stripe = require('stripe')(keys.stripeSecretKey);

const DOMAIN='http://localhost:3000';

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"),(req,res)=>{
    res.redirect('/surveys')
  });

  app.get("/api/logout",(req,res)=>{
    req.logout();
    res.redirect("/")
  })

  app.get("/api/current_user",(req,res)=>{
    res.send(req.user);  
  })

  app.post("/api/checkout/credits",async(req,res)=>{

    const session = await stripe.checkout.sessions.create({
      line_items:[
        {
          price:'price_1LsDlHFFbi0F81lz9T9lyekg',
          quantity:1
        }
      ],
      mode:'payment',
      success_url:`${DOMAIN}?success=true`,
      cancel_url:`${DOMAIN}?canceled=true`,
    });
    res.redirect(303,session.url);
   })
};

//CREAR PRODUCTO STRIPE
//const product = await stripe.products.create({name: 'Credits'});
//CREARLE PRECIO AL PRODUCTO
    // const price = await stripe.prices.create({
    //   product:'prod_MbQauaRumJJDjr',
    //   unit_amount:500,
    //   currency:'usd'
    // })