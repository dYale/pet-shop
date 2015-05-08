(function () {

  window.PetShop = {}

  PetShop.controller = function () {
    var ctrl = this
    ctrl.shop = m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1' })
    ctrl.pets = m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets'})
    ctrl.myclickhandler = function(){return 'clicked!'};

  }

  PetShop.view = function (ctrl) {
    return m('.pet-shop', [
      m('h1', "Welcome to " + ctrl.shop().name),
      m('h2', "Check out our furry inventory:"),
      ctrl.pets().map(function(animal){
        return m('.container', [
          m("img", { src: animal.imageUrl, height: '200px', width: '200px'}),
          m('br'),
          m('name', animal.name + " the " + (animal.species[0].toUpperCase()) + animal.species.slice(1)),
          m('br'),
          console.log(),
          m("button", {onclick: ctrl.myclickhandler}, animal.likes)])




        })
      
    ])
  }

})()
