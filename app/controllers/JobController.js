import JobService from '../services/JobService.js'


let _jobService = new JobService()

// Draw all the jobs
// get jobs from service
// also get the element to inject jobs into
function _draw() {
    let template = ''
    let jobs = _jobService.Jobs

    // NOTE I don't have to worry about removing old jobs here because that's passed to Job Service
    jobs.forEach(job => {
        template += job.Template
    })

    document.querySelector("#jobs").innerHTML = template
}

export default class JobController {
    constructor() {
        console.log("Hello from Job Controller!")
        _draw()
    }

    // Gathers data from form event, formats into object,
    //  sends to service, and updates page
    addJob(event) {
        // Gets data from form event
        event.preventDefault()
        let form = event.target

        // Formats data to match object model (Job)
        let newJob = {
            company: form.company.value,
            position: form.position.value,
            salary: form.salary.value,
            description: form.description.value
        }
        // Passes object to Service, then draw()
        _jobService.addJob(newJob)
        _draw()
    }

    // Delete job by id
    deleteJob(id) {
        _jobService.deleteJob(id)
        _draw()
    }




}