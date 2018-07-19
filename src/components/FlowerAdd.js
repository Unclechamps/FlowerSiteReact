
import React, {Component} from 'react'
import '../Styles.css'

export class FlowerAdd extends Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);
    this.addFlowers = this.addFlowers.bind(this);

    this.state = {
      name : '',
      description : '',
      imageURL : ''
    }
  }



  onChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  addFlowers() {

    let flower = {name : this.state.name, description : this.state.description,
    imageURL : this.state.imageURL}

    let name = document.getElementById('name')
    let description = document.getElementById('description')
    let imageURL = document.getElementById('imageURL')

    fetch('https://flowers.vapor.cloud/flower', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(flower)
    }).then(function(response){
      return response.json()
    }).then(function(json){
      console.log(json)
      name.value = ''

    })
}

  render() {
    return (
      <div className = "addFlowerForm">


      <div>
        <label>Name: </label>
        <input type="text" id="name" value={this.state.name} onChange={this.onChange} name="name"/>
      </div>
      <div>
        <label>Description: </label>
        <input type="text" id="description" value={this.state.description} onChange={this.onChange} name="description" />
      </div>
      <div>
        <label>ImageURL: </label>
        <input type="text" id="imageURL" value={this.state.imageURL} onChange={this.onChange} name="imageURL" />
      </div>
        <button onClick={() => this.addFlowers()} >Add Flower</button>
      </div>
    );
  }

}
