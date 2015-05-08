(function () {

  window.PetShop = {}

  PetShop.controller = function () {
    var ctrl = this
    ctrl.shop = m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1' })
    ctrl.pets = m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets'})
  }

  PetShop.view = function (ctrl) {
    return m('.pet-shop', [
      m('h1', "Welcome to " + ctrl.shop().name),
      console.log(ctrl.pets().name),
      m('h2', 'our pets are:' + ctrl.pets().map(function(animal){
        return animal.species})
      )
    ])
  }

})()
