import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  constructor(){
    super();
    this.addFish=this.addFish.bind(this);
    this.removeFish=this.removeFish.bind(this);
    this.updateFish =this.updateFish.bind(this);
    this.loadSamples=this.loadSamples.bind(this);
    this.addToOrder=this.addToOrder.bind(this);
    this.removeFromOrder= this.removeFromOrder.bind(this);
    //get Initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  //LifeCycle Methods
// below Will Mount  is found in Video 18
  componentWillMount() {
    // this runs right before the  <App> is render
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`
      , {
        context: this,
        state: 'fishes',
      });
    //check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    if(localStorageRef) {
      //update our App compoenent's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnMount() {
    base.removeBinding(this.ref);
  }
//local storage in Application only store strings no objects
// below Will Update is found in Video 19
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(`order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order));
  }

  addFish(fish) {
//1st - update our state
    const fishes = {...this.state.fishes};
     // "..."" is a spread  - every item from our object and spread it into this object..takes copy of existing state and add to new state
    // u can directly update state by   >  this.state.fishes.fish1 = fish;  however best practice is above
//2nd  add in our new fish and give them unique id with a timestamp
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
// 3rd - set state   fishes: fishes  is the same as fishes
    this.setState({ fishes})
  }

  updateFish (key, updatedFish) {
    const fishes = {...this.state.fishes};
    fishes[key] = updatedFish;
    this.setState({fishes})
  }

  removeFish(key) {
    const fishes = {...this.state.fishes};
    fishes[key] = null;
    this.setState({fishes})
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key){
    //take a copy of state
    const order ={...this.state.order};
    //update or add the new number of fish to order
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({order});
  }

  removeFromOrder(key){
    const order = {...this.state.order}
    delete order[key]
    this.setState({order});
  }


  render() {
    return (
      <div className="catch-of-the-day">
         <div className="menu">
            <Header tagline="Fresh Seafood Market"/>
            <ul className="list-of-fishes">
              {
                Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key}
                    details={this.state.fishes[key]}
                    addToOrder={this.addToOrder}/>)
               }
            </ul>
         </div>
         <Order
              fishes={this.state.fishes}
              order={this.state.order}
              params={this.props.params}
              removeFromOrder={this.removeFromOrder}
           />
          {/* not good practice to pass down whole state*/}
         <Inventory
            addFish={this.addFish}
            removeFish={this.removeFish}
            loadSamples={this.loadSamples}
            fishes={this.state.fishes}
            updateFish={this.updateFish}
            storeId={this.props.params.storeId}
            />
      {/* passing addFish function down to child item add Fish is inside this parent component*/}
      </div>
    )
  }
}

App.propTypes = {
  params: React.PropTypes.object.isRequired
}


export default App;
