import React from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import ImageView from '../components/ImageView/ImageView';
import Rank from '../components/Rank/Rank'
import Particles from 'react-particles-js';
import {circleParticles} from './Particles';

const app = new Clarifai.App({
  apiKey: '7781ae722ba94ab0ad88394bf245e4f2'
 });

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imageCheck');
    const height = Number(image.height);
    const width = Number(image.width);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - (face.right_col * width),
      bottomRow: height - (face.bottom_row * height)
    }
  }

  displayFaceBox = (box) =>{ 
    this.setState({box : box});
    console.log('Box State', this.state.box);
  }

  onInputChange = (event) => this.setState({input: event.target.value});

  onButtonClick = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }


  render() {
      return (
      <div className="App">
        <Particles className='particles' params={circleParticles} />
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonClick = {this.onButtonClick} />
        <ImageView imageUrl = {this.state.imageUrl} box = {this.state.box} />
      </div>
    );
  }
}

export default App;
