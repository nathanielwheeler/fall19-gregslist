import Job from "../models/Job.js"



let _state = {
    jobs: [new Job({
        company: "Plundleschnuk Enterprises",
        position: "Senior Cankishnik Operator",
        salary: "5000 Vangbluds per fortnight",
        description: "Self-explanatory"
    })]
}

export default class CarService {
    constructor() {
        console.log("Hello from JobService!")
        console.log(_state.jobs)
    }

    get Jobs() {
        return _state.jobs.map(job => new Job(job))
    }

    addJob(newJob) {
        _state.jobs.push(new Job(newJob))
        console.log(_state.jobs)
    }

    deleteJob(id) {
        _state.jobs.forEach((job, i) => {
            if (job._id == id) {
                _state.jobs.splice(i, 1)
            }
        })
    }





}