(function(){

  window.SignIn = {}

  SignIn.controller = function (options) {
  	var ctrl = this;
  	ctrl.username = m.prop('');
  	ctrl.password = m.prop('');
  	// ctrl.SIGN_UP = m.request({method: 'POST', url: 'http://pet-shop.api.mks.io/SignIn', data{ 
  														// apitoken: "2519cffd-e099-4d23-9070-080470eb33b1"}})
  	// ctrl.SIGN_IN = m.request({method: 'GET', url: 'http://pet-shop.api.mks.io/SignIn'})
  	// ctrl.SignIn = function(username, password){
  		ctrl.submit = function (e){
  			e.preventDefault();
  			m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signin', 
          data:{'username': ctrl.username,'password': ctrl.password} })
          .then(function(){console.log('Passed')}, function(){console.log('failed')})
  }
}

  SignIn.view = function (ctrl) {
  	return m('form', {class: 'signin',onsubmit: ctrl.submit}, [
  	  m('h1', 'Sign In'),
  	  m("input[type=text]", {placeholder: 'Username', value:ctrl.username(), onchange: m.withAttr('value', ctrl.username)}),
  	  m('input[type=text]', {placeholder: 'Username', value:ctrl.password(), onchange: m.withAttr('value', ctrl.password)}),
  	  m('button[type=submit]','Sign In')
  	])
  }

})()





