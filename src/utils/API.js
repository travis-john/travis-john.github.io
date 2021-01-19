import React from 'react';
import axios from 'axios';

export default {
  githubRepos: () =>{
    return axios.get('https://api.github.com/users/travis-john/repos');
  }
}
