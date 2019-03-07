export default {
  getExperiences(){
    return fetch('https://travtrips-api.herokuapp.com/api/experiences')
    .then(res => res.json())
  },
  getExperience(id){
    return fetch('https://travtrips-api.herokuapp.com/api/experiences/' + id)
    .then(res => res.json())

  },
  getBasket(){
    return fetch('https://travtrips-api.herokuapp.com/api/basket')
    .then(res => res.json())
  },
  addToBasket(payload){
    return fetch('https://travtrips-api.herokuapp.com/api/basket', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())

  },
  removeFromBasket(id){
    return fetch('https://travtrips-api.herokuapp.com/api/basket/' + id, {
      method: 'DELETE'
    })
  }
}
