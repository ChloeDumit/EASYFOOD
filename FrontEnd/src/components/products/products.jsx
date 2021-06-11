import React, {Component} from "react";
import axios from "axios";



export default class Products extends Component {

    constructor() {
        super();
        this.state = {
            products: "Not gotten Yet"
        }
    }
    componentDidMount = () => {
        axios.get("/api/allproducts").then(function(response) {
            this.setState({
                products: response.data
            })
        })
    }
    render(){
  return (
    <article className="">
        <p>Hola: {this.state.products}</p>
    </article>
  );
}
}

