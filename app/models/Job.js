

export default class Job {
    constructor(data) {
        this._id = data._id || Math.floor(Math.random() * 20736)
        this.company = data.company
        this.position = data.position
        this.salary = data.salary
        this.description = data.description || "No description provided"
    }

    get Template() {
        return `
        <div class="card bg-dark col-3">
          <h1 class="card-header">${this.position} at ${this.company}</h1>
          <div class="card-body">
            <h3><strong>Salary:</strong> ${this.salary}</h3>
            <p>Description: ${this.description}</p>
            <button class="btn btn-danger" onclick="app.controllers.jobController.deleteJob(${this._id})">Delete Job</button>
          </div>
        </div>
        `
    }
}