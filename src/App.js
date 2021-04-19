import React from "react";
import "./App.css";
import Colors from "./components/Colors";
import DetailsThumb from "./components/DetailsThumb";

class App extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Nike Shoes",
        src: [
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ],
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const { products, index } = this.state;
    return (
      <div className="app">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                style={{ zIndex: "10", position: "relative", left: "7px" }}
                alt=""
              />

              <img
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                style={{ marginTop: "-25px", zIndex: "5" }}
                alt=""
              />
            </div>

            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
              </div>
              <Colors colors={item.colors} />

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
              <div>
                ----------------------------------------------------------
              </div>
              <div className="row">
                <h2>{item.title}</h2>
              </div>
              <Colors colors={item.colors} />

              <DetailsThumb
                images={item.src}
                tab={this.handleTab}
                myRef={this.myRef}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
