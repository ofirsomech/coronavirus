import React from 'react';
import { Button, ButtonGroup } from "@material-ui/core";

import { Cards, CountryPicker, Chart } from './components';
import { getData } from './Api/index';
import './App.css';
import { en, he  , it , ru} from "./Language";

import image from './image/covid2.png';


class App extends React.Component {
  state = {
    data: {},
    country: '',
    language: en
  }

  async componentDidMount() {
    const data = await getData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    if (country === "global") {
      const data = await getData();
      this.setState({ data, country: null });
      return;
    }
    const data = await getData(country);
    this.setState({ data, country: country });
  }
  

  handleLanguage(lang) {
    console.log(lang);
    
    switch (lang) {
      case "en":
        this.setState({ language: en })
        break;
      case "he":
        this.setState({ language: he })
        break;
        case "it":
        this.setState({ language: it })
        break;
        case "ru":
        this.setState({ language: ru })
        break;
      default:
        break;
    }

  }


  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img className="image" src={image} alt="COVID-19" />
        <div className="language">
          <h3>Select Language</h3>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button onClick={() => this.handleLanguage("en")}>English</Button>
            <Button onClick={() => this.handleLanguage("he")}>עברית</Button>
            <Button onClick={() => this.handleLanguage("it")}>Italiano</Button>
            <Button onClick={() => this.handleLanguage("ru")}>Русский</Button>
          </ButtonGroup>
        </div>
        <Cards data={data} language={this.state.language} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} language={this.state.language} />
      </div>
    );
  }
}

export default App;