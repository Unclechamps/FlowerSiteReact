
import React, {Component} from 'react'
import '../Styles.css'

export class Flower extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flowers : []
    }
  }

populateFlower () {
fetch('https://flowers.vapor.cloud/flowers')
.then((response) => response.json())
.then((json) => {
  this.setState({
    flowers : json
  })
})
}


componentDidMount() {
  this.populateFlower()
}



  render() {

    let flowerItem = this.state.flowers.map((flower, index) => {
      return (
        <div className="indFlower" key={index}>
          <img className="picture" src={flower.imageURL} />
          <h4 className="flowerName">{flower.name}</h4>
          <p className="flowerDesc">{flower.description}</p>
        </div>
      )
    })

  return (
      <div className="flowerList">
        {flowerItem}
      </div>
    )
  }

}
