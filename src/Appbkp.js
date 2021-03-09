import "./App.css";
import React, { Component } from "react";
import reactDom from "react-dom";
// import reactDom from 'react-dom';

class CalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: "",
      result: "",
    };
  }

  _addToExp = (val) => {
    let { exp } = this.state;
    exp += val;
    this.setState({ exp });
    // console.log(val, exp);
  };
  _calc = () => {
    let { exp } = this.state;
    // console.log(eval(exp));
    this.setState({ result: eval(exp) });
  };
  _clear = () => {
    this.setState({
      exp: "",
      result: "",
    });
  };
  _backSpace = () => {
    let { exp } = this.state;
    exp = exp.slice(0, -1);
    this.setState({ exp });
  };
  render() {
    return (
      <div className={"MainPage"}>
        <div className={"CalBox"}>
          <div className={"UpBox"}>
            <div className={"exp"}>{this.state.exp}</div>
            <div className={"result"}>{this.state.result}</div>
          </div>
          <div className={"DownBox"}>
            <div className={"FirstBox"}>
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                onClick={this._clear}
                val={"AC"}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                onClick={this._backSpace}
                val={"_"}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                val={"+/-"}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                onClick={this._addToExp}
                val={"*"}
              />
            </div>
            <div className={"FirstBox"}>
              <CalBtn
                styles={{ backgroundColor: "rgb(25, 22, 22)", color: "white" }}
                val={"7"}
                onClick={this._addToExp}
              />
              <CalBtn
                styles={{ backgroundColor: "rgb(25, 22, 22)", color: "white" }}
                val={"8"}
                onClick={this._addToExp}
              />
              <CalBtn
                styles={{ backgroundColor: "rgb(25, 22, 22)", color: "white" }}
                val={"9"}
                onClick={this._addToExp}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                val={"-"}
                onClick={this._addToExp}
              />
            </div>
            <div className={"FirstBox"}>
              <CalBtn
                styles={{ backgroundColor: "rgb(25, 22, 22)", color: "white" }}
                val={"4"}
                onClick={this._addToExp}
              />
              <CalBtn
                styles={{ backgroundColor: "rgb(25, 22, 22)", color: "white" }}
                val={"5"}
                onClick={this._addToExp}
              />
              <CalBtn
                styles={{ backgroundColor: "rgb(25, 22, 22)", color: "white" }}
                val={"6"}
                onClick={this._addToExp}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                val={"+"}
                onClick={this._addToExp}
              />
            </div>
            <div style={{ flex: 2, display: "flex" }}>
              <div
                style={{ display: "flex", flex: 3.8, flexDirection: "column" }}
              >
                <div className={"FirstBox"}>
                  <CalBtn
                    styles={{
                      backgroundColor: "rgb(25, 22, 22)",
                      color: "white",
                    }}
                    val={"1"}
                    onClick={this._addToExp}
                  />
                  <CalBtn
                    styles={{
                      backgroundColor: "rgb(25, 22, 22)",
                      color: "white",
                    }}
                    onClick={this._addToExp}
                    val={"2"}
                  />
                  <CalBtn
                    styles={{
                      backgroundColor: "rgb(25, 22, 22)",
                      color: "white",
                    }}
                    val={"3"}
                    onClick={this._addToExp}
                  />
                </div>
                <div className={"FirstBox"}>
                  <CalBtn
                    styles={{
                      backgroundColor: "rgb(25, 22, 22)",
                      color: "white",
                    }}
                    val={"0"}
                    onClick={this._addToExp}
                  />
                  <CalBtn
                    styles={{
                      backgroundColor: "rgb(25, 22, 22)",
                      color: "white",
                    }}
                    val={"."}
                    onClick={this._addToExp}
                  />
                  <CalBtn
                    styles={{
                      backgroundColor: "rgb(25, 22, 22)",
                      color: "white",
                    }}
                    val={"%"}
                    onClick={this._addToExp}
                  />
                </div>
              </div>

              <CalBtn
                styles={{
                  backgroundColor: "rgb(1, 200, 200)",

                  color: "#fff",
                }}
                onClick={this._calc}
                val={"="}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function CalBtn(props) {
  return (
    <button
      style={{ fontSize: "20px", border: "rgb(1, 200, 200)", ...props.styles }}
      className={"InsideBtn"}
      onClick={() => {
        let { val, onClick } = props;
        // if(val === 'AC') {
        //   onClick();
        // } else if()
        onClick(val);
      }}
    >
      {props.val}
    </button>
  );
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <CalPage />
      </div>
    );
  }
}

export default Calculator;
