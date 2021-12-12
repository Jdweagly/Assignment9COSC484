import React from 'react';
import { FirstArticle } from '../App/FirstArticle';
import { SecondArticle } from '../App/SecondArticle';
import { ThirdArticle } from '../App/ThirdArticle';
//each article has its own jsx file. These files are almost identical except the array address
//must be changed when pulling data from the json. Since there are 3 articles, that is
//how many files I have made total, with address calls ranging from 0 - 2.

//This project was built by Justin Weagly on stackblitz. Much of the code was learned and pulled //from the http get demo provided on blackboard, with heavy modifications made and files added. 

class App extends React.Component {
  render() {
    return (
      <div>
        <h3 className="p-3 text-center">Assignment9 Justin Weagly</h3>
        <ul>
        <FirstArticle /> 
        <SecondArticle />
        <ThirdArticle />
        </ul>
      </div>
    );
  }
}

export { App };
