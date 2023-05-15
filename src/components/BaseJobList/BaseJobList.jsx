import { BaseJob } from "Api/BaseJob"
import { Job } from "Api/Job";

const BaseJobList = () =>{
    const job = new Job({title: 'ffff', description: 'ffff', salary: 1, employer: 'ffff'})
    const baseJobs = new BaseJob([job]);

    return(
        <ul>
            { baseJobs.jobs.map((jobs) => {
                const {id, title} = jobs.getInfo();
                return(
                    <li key={id}><p>{title}</p>

                    </li>
                )
            }) }
        </ul>
    )
}

export default BaseJobList;