import {v4 as uuidv4} from 'uuid';

const Mutation = {
  async createUser(parent, args, { UserModel }, info){
    //const accounttaken = UserModel
    let user = await UserModel.findOne({ account:args.account });
    if(user){
      user.name = "account taken!!";
      user.account = "account taken!!";
      user.password = "account taken!!";
      return user;
    }
    else{
      user = await new UserModel({ name:args.name, account: args.account, password: args.password }).save();
      return user;
    }
  },
  async createRestaurant(parent, args, { RestaurantModel }, info){
    let restaurant = await RestaurantModel.findOne({ name:args.name });
    if(!restaurant)restaurant = await new RestaurantModel({name:args.name, information:[], comments:[], sprate:[], spTFrate:[]}).save();
    console.log(restaurant)
    return restaurant;
  },
  async createComment(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
    let loading = true
    let restaurant = await RestaurantModel.find({_id:args.restaurantid}).exec((err,res)=>{
      loading = false
      return res
    })
    while(loading)console.log('/')
    console.log('//')
    console.log(restaurant)
    return restaurant
  },
  async createRate(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
  },
  async createTFRate(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
  },
  async createGraph(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
  }

};

export { Mutation as default };
