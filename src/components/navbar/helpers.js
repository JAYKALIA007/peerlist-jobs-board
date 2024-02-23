import { ADMIN_USER_IMG_URL, LOOM_ICON_URL } from "./constants"

export const AdminUserImage = () =>{
    return(
        <img 
            src={ADMIN_USER_IMG_URL} 
            alt='admin thumbnail'
            className="w-6 h-6 rounded-full object-cover "
        />
    )
}

export const LoomIcon = () =>{
    return(
        <img 
            src={LOOM_ICON_URL} 
            alt='loom icon thumbnail'
            className="w-6 h-6 rounded-full object-cover "
        />
    )
}