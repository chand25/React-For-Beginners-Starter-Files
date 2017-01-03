import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(){
    super();
    this.addFish=this.addFish.bind(this);
    this.loadSamples=this.loadSamples.bind(this);
    this.addToOrder=this.addToOrder.bind(this);
    //get Initial state
    this.state = {
      fishes: {},
      order: {}
    };
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
         <Order fishes={this.state.fishes} order={this.state.order}
            />
          {/* not good practice to pass down whole state*/}
         <Inventory addFish={this.addFish} loadSamples={this.loadSamples}
            />
      {/* passing addFish function down to child item add Fish is inside this parent component*/}
      </div>
    )
  }
}

export default App;
