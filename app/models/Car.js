

export default class Car {
  constructor(data) {
    this._id = data._id || Math.floor(Math.random() * 400000)
    this.make = data.make
    this.model = data.model
    this.price = data.price
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description || "No description provided"
  }

  get Template() {
    return `
        <div class="card bg-dark col-3">
          <h1 class="card-header">${this.year} ${this.make} ${this.model}</h1>
          <img src="${this.imgUrl}" class="card-img-top" alt="">
          <div class="card-body">
            <h3>Now for only $${this.price} !</h3>
            <p>Description: ${this.description}</p>
            <button class="btn btn-danger" onclick="app.controllers.carController.deleteCar(${this._id})">Delete Car</button>
          </div>
        </div>
    `
  }
}