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
    if(!restaurant)restaurant = await new RestaurantModel({name:args.name, information:[], comments:[], sprate:[], spTFrate:[], graph:[]}).save();
    //console.log(restaurant)
    return restaurant;
  },
  async createComment(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
    let restaurant = await RestaurantModel.findOne({_id:args.restaurantid}).exec()
    //console.log(restaurant)
    restaurant.comments.push({name: args.name, person_id:args.userid, body:args.body, star:args.star, time:args.time})
    restaurant.save();

    return {name: args.name, person_id:args.userid, body:args.body, star:args.star, time:args.time}
  },
  async createRate(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
    let restaurant = await RestaurantModel.findOne({_id:args.restaurantid}).exec()
    for(let i=0;i<restaurant.sprate.length;i++){
      if(restaurant.sprate[i].name == args.ratewhat){
        restaurant.sprate[i].star = (restaurant.sprate[i].star * restaurant.sprate[i].people + args.star) / (restaurant.sprate[i].people + 1)
        restaurant.sprate[i].people += 1;
        restaurant.save();
        return restaurant.sprate[i]
      }
    }
    restaurant.sprate.push({name:args.ratewhat, people:1, star:args.star})
    restaurant.save();
    return {name:args.ratewhat, people:1, star:args.star}
  },
  async createTFRate(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
    let restaurant = await RestaurantModel.findOne({_id:args.restaurantid}).exec()
    for(let i=0;i<restaurant.spTFrate.length;i++){
      if(restaurant.spTFrate[i].name == args.ratewhat){
        if(args.TF === true)restaurant.spTFrate[i].Tnum += 1;
        else restaurant.spTFrate[i].Fnum += 1;
        restaurant.save();
        return restaurant.spTFrate[i]
      }
    }
    if(args.TF === true){
      restaurant.spTFrate.push({name:args.ratewhat, Fnum:0, Tnum:1})
      restaurant.save();
      return {name:args.ratewhat, Fnum:0, Tnum:1}
    }
    else{
      restaurant.spTFrate.push({name:args.ratewhat, Fnum:1, Tnum:0})
      restaurant.save();
      return {name:args.ratewhat, Fnum:1, Tnum:0}
    }

  },
  async createGraph(parent, args, { UserModel, RestaurantModel }, info){
    //need to input valid id, or an error will appear.
    let restaurant = await RestaurantModel.findOne({_id:args.restaurantid}).exec()
    console.log(args.graph)
    restaurant.graph.push(args.graph)
    restaurant.save();
    console.log(restaurant.graph)
    return args.graph;
  }

};

export { Mutation as default };
