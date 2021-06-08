import axios from "axios";
import React from "react";
// import axios from "axios";

class App extends React.Component {
  state = {
    status: [],
  };

  componentDidMount() {
    const covidUrl =
      "https://corona.lmao.ninja/v2/countries/Malaysia?yesterday=true&strict=true&query";
    axios.get(covidUrl).then((res) => {
      const status = res.data;
      console.log(status);
      this.setState({ status });
    });
  }
  render() {
    return (
      <div className="bg-gray-100 h-screen">
        <h1 className="text-lg font-bold">Malaysia Covid-19 Status</h1>
        <div className="flex">
          <div className="bg-white w-1/4 border shadow-sm p-5">
            <p>Today Cases</p>
            <p>{this.state.status.todayCases}</p>
          </div>
          <div className="bg-white w-1/4 border shadow-sm p-5">
            <p>Active Cases</p>
            <p>{this.state.status.active}</p>
          </div>
          <div className="bg-white w-1/4 border shadow-sm p-5">
            <p>Today Death</p>
            <p>{this.state.status.todayDeaths}</p>
          </div>
          <div className="bg-white w-1/4 border shadow-sm p-5">
            <p>Today Recovered</p>
            <p>{this.state.status.todayRecovered}</p>
          </div>
          <div className="bg-white w-1/4 border shadow-sm p-5">
            <p>Critical Cases</p>
            <p>{this.state.status.critical}</p>
          </div>
          <div className="bg-white w-1/4 border shadow-sm p-5">
            <p>Total Cases</p>
            <p>{this.state.status.cases}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
