(function(){

  window.SignIn = {}


  SignIn.controller = function (options) {
  	var ctrl = this;
  	ctrl.username = m.prop('');
  	ctrl.password = m.prop('');

  		ctrl.submit = function (e){
  			e.preventDefault();
  			m.request({ method: 'POST', url: 'http://pet-shop.api.mks.io/signin', 
          data:{'username': ctrl.username,'password': ctrl.password} })
          .then(function(r){
            PetShop.current(r);
            window.id = r.user.id;
            window.api = r.apiToken;
            console.log('Passed')}, 
            function(){console.log('failed')})
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





