import React, { useState } from 'react';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/ImageLinkForm/imageLinkForm'
import Rank from './components/Rank/rank'
import './App.css';
import 'tachyons';
import Clarifai from 'clarifai'
import FaceRec from './components/FaceRec/faceReg';


function App() {
  let [state,setState] = useState({
    input:'',
    imageURL:''
  });

  const app = new Clarifai.App({
    apiKey: 'a5feb8dee5be409c83b4c4fc008994c8'
   });

  const onInputChange = (event) => {
    let userInput = event.target.value;
    setState((prev)=>(
      {
        input:userInput,
        imageURL:prev.imageURL
      }));
  };
  const onSubmit = () => {
    setState((prev)=>(
      {
        imageURL:prev.input
      }));
    app.models.predict( Clarifai.FACE_DETECT_MODEL,
      state.input
      )
      .then((response) => {
      console.log(response.outputs[0].data);
      })
      .catch((err) => {
      console.log(err);
      });
      };    


  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onSubmit={onSubmit} onInputChange={onInputChange} />
      <FaceRec imageURL={state.imageURL}/>
    </div>
  );
}

export default App;
