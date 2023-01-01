import mongoose from 'mongoose';

const Query = {
  async LogInQuery(parent, args, { UserModel }, info){
    console.log("LogInQuery",args)
    let user = await UserModel.findOne({ account:args.account });
    console.log("finish findone")
    if(user)return user;
    else{
      user = { name:"not found", account: "not found", password: "not found",id:"not found" };
      return user;
    }
  },
  async SearchRestaurantByName(parent, args, { RestaurantModel }, info){
    //console.log(RestaurantModel.find({name:args.name}))
    //console.log(RestaurantModel.find({ name: { "$regex": args.name, "$options": "i" } }))//.name.toLowerCase()
    return RestaurantModel.find({ name: { "$regex": args.name, "$options": "i" } })
    //return RestaurantModel.find({name:args.name});
    //return RestaurantModel.find().name.toLowerCase();
  },
  async GetRestaurantById(parent, args, { RestaurantModel }, info){
    //need to input valid id, or an error will appear.
    return RestaurantModel.findOne({_id:args.id})
  }
};

export { Query as default };
