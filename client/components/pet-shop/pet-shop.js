(function () {

  window.PetShop = {}

  PetShop.controller = function () {
    var ctrl = this
    ctrl.shop = m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1' })
    ctrl.pets = m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets'})

   PetShop.current = m.prop(null) 

    ctrl.refresh = function(){
      m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1/pets'}).then(ctrl.pets);
      m.request({ method: 'GET', url: 'http://pet-shop.api.mks.io/shops/1' }).then(ctrl.shop);
      console.log('refreshed')
    }


    setInterval(ctrl.refresh, 7 * 1000);

    ctrl.refresh();


    // ctrl.like = function(animal){
    //   m.request({ 
    //     method: 'POST', 
    //     url: 'http://pet-shop.api.mks.io/shops/1/pets/' + animal.id + '/like', 
    //     data: { apiToken: window.api }
    //   } ).then(
    //     function(newPetData){
    //       var pets = ctrl.pets();
    //       var pet = pets[newPetData.id - 1];

    //       pet.likes = newPetData.likes;

    //       console.log('SUBMITTED')
    //     },
    //     function(){ console.log('failed!') }
    //   )

    // }
  }


  PetShop.view = function (ctrl) {
    return m('.pet-shop', [
      m('h1', "Welcome to " + ctrl.shop().name),
      m('h2', "Check out our furry inventory:"),
        ctrl.pets().map( renderShop.papp(ctrl))
    //     return m('.container', [
    //       m("img", { src: animal.imageUrl, height: '200px', width: '200px'}),
    //       m('br'),
    //       m('name', animal.name + " the " + (animal.species[0].toUpperCase()) + animal.species.slice(1)),
    //       m('br')

         
    //   ]
    // )})
  ])}


    function renderShop(ctrl,animal){
          
        return m('.container', [
          m("img", { src: animal.imageUrl, height: '200px', width: '200px'}),
          m('br'),
          m('name', animal.name + " the " + (animal.species[0].toUpperCase()) + animal.species.slice(1)),
          m('br'),
          m('span', animal.likes.length),
          likeButtonView(ctrl, animal)

         
      ]
    )}


  function likeButtonView(ctrl, animal){


    if(!PetShop.current()) return null;
    var hasLiked = animal.likes.indexOf(PetShop.current().user.id) >= 1;
    if (hasLiked) return null;
     return m('form', [
          m("button[type=click]" ,{onclick: function(e){
                                  e.preventDefault();
                                  ctrl.like(animal)}}, 'Love ME!!!')
          ])
   }



})()
