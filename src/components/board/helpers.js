import { JOB_POSTED_BY_IMG_URL } from "./constants"

export const JobPostedByImage = () =>{
    return(
        <img 
            src={JOB_POSTED_BY_IMG_URL} 
            alt='admin thumbnail'
            className="w-6 h-6 rounded-full object-cover relative bottom-1"
        />
    )
}