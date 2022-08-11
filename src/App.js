import React, { Component, useState } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm'
import Rank from './components/Rank/rank'
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai'
import FaceRec from './components/FaceRec/faceRec';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Ingrdient from './components/ingredientList/ingredient';

const app = new Clarifai.App({
  apiKey: 'a5feb8dee5be409c83b4c4fc008994c8'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box:{},
      route:'signIn',
      isSignedIn:false,
      ingredients:[],
      user:{
        id: 7463,
        name: '',
        email: '',
        password: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

//   componentDidMount(){
//     fetch('http://localhost:3000/')
//     .then(response=>response.json())
//     .then(console.log)
// }

  onInputChange = (event) => {
    let userInput = event.target.value;
    this.setState({input:userInput})
  };

  onSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict( Clarifai.FOOD_MODEL,
      this.state.input)
      .then((response) => { 
      if(response){
        console.log(response);
        fetch('http://localhost:3000/image',{
          method:'put',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify({
          id:this.state.user.id
          })
        })
        .then(res=>res.json()).then(data=>{
          this.setState({
          ...this.state,
          user:{
            ...this.state.user,
            entries:data.entries
          }
        })})
      }
      // this.displayFaceBox(this.calFaceLocation(response));
      this.listIngredients(response);
    })
      .catch((err) => {
        console.log(err);
      });
  };    

  listIngredients = (response) => {
    const ingredientArr = response.outputs[0].data.concepts.slice(0,8);
    console.log(ingredientArr);
    let ingredientAndPercent = ingredientArr.map(x=>(
      {
        ingredient:x.name,
        percent:Math.round(x.value*100)
      }))
    this.setState({ingredients:ingredientAndPercent});
  }
  // calFaceLocation = (response) => {
  //   const face = response.outputs[0].data.regions[0].region_info.bounding_box;
  //   const image = document.getElementById('inputImage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return {
  //     leftCol: face.left_col*width,
  //     topRow: face.top_row*height,
  //     rightCol: width-(face.right_col*width),
  //     bottomRow: height-(face.bottom_row*height),
  //   }
  // }

  // displayFaceBox = (box) => {
  //   console.log(box);
  //   this.setState({box:box})
  // }

  onRouteChange = (route) => {
    if(route === 'signOut'){
      this.setState({isSignedIn:false})
    } else if (route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route})
  }

  render(){
    const {imageURL,box,route,isSignedIn} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {(route==='home') ? 
        <div>
        <Logo />
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <ImageLinkForm onSubmit={this.onSubmit} onInputChange={this.onInputChange} />
        <FaceRec box={box} imageURL={imageURL}/>
        <Ingrdient listIngredients={this.state.ingredients}/>
        </div>
        : ((route==='signIn') ?
        <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
        )
        }
      </div>
    );
  }
  
}

export default App;
