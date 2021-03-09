import "./App.css";
import React, { Component } from "react";
import reactDom from "react-dom";
import { BsArrowLeft } from "react-icons/bs";

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
  };
  _calc = () => {
    let { exp } = this.state;
    this.setState({ result: eval(exp) });
  };
  _backspace = () => {
    let { exp } = this.state;
    exp = exp.slice(0, -1);
    this.setState({ exp });
  };
  _addMinus = () => {
    let { exp } = this.state;
    exp = -exp;
    this.setState({ exp });
  };
  _clear = () => {
    this.setState({
      exp: "",
      result: "",
    });
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
                val={"AC"}
                onClick={this._clear}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                val={<BsArrowLeft size={30} />}
                onClick={this._backspace}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                val={"+/-"}
                onClick={this._addMinus}
              />
              <CalBtn
                styles={{
                  backgroundColor: "#2d2424",
                  color: "rgb(1, 200, 200)",
                }}
                val={"*"}
                onClick={this._addToExp}
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
                    val={"2"}
                    onClick={this._addToExp}
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
                val={"="}
                onClick={this._calc}
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
