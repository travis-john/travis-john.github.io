import React, {Component } from 'react';

function new_script(src) {

  return new Promise(function(resolve, reject){
    var script = document.createElement('script');
    script.src = src;
    script.addEventListener('load', function () {
      resolve();
    });
    script.addEventListener('error', function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  })
};

let jquery = new_script('assets/js/jquery.min.js');
let bootstrap = new_script('assets/js/bootstrap.bundle.min.js');
let plugin = new_script('assets/js/jquery.easing.min.js');
let main = new_script('assets/js/main.min.js');

class MainJS extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      status: 'start'
    };
  }

  jquery_load = () => {
    var self = this;
    jquery.then(function() {
      self.setState({'status': 'done'});
    }).catch(function() {
      self.setState({'status': 'error'});
    })
  }

  bootstrap_load = () => {
    var self = this;
    bootstrap.then(function() {
      self.setState({'status': 'done'});
    }).catch(function() {
      self.setState({'status': 'error'});
    })
  }

  plugin_load = () => {
    var self = this;
    plugin.then(function() {
      self.setState({'status': 'done'});
    }).catch(function() {
      self.setState({'status': 'error'});
    })
  }

  main_load = () => {
    var self = this;
    main.then(function() {
      self.setState({'status': 'done'});
    }).catch(function() {
      self.setState({'status': 'error'});
    })
  }

  render() {
    var self = this;
    if (self.state.status === 'start') {
      self.state.status = 'loading';
      setTimeout(function () {
        self.jquery_load();
        self.bootstrap_load();
        self.plugin_load();
        self.main_load();
      }, 0);
    }

    return (
      <div></div>
    );
  }
}

export default MainJS;
