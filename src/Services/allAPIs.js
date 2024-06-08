import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//Register API call
export const registerAPI = async(user) => {
    return await commonAPI("post",`${serverURL}/register`,user,"")
}

//login API call
export const loginAPI = async(user) => {
    return await commonAPI("post",`${serverURL}/login`,user,"")
}

//add Project API call
export const addProjectAPI = async(reqBody,reqHeader) => {
    return await commonAPI("post",`${serverURL}/project/add-project`,reqBody,reqHeader)
}

//home project API call
export const homeProjectAPI = async() =>{
    return await commonAPI("get",`${serverURL}/home-projects`,'','')
}

//all projects API call
export const allProjectsAPI = async(searchKey,reqHeader) => {
    return await commonAPI("get",`${serverURL}/get-demo?search=${searchKey}`,'',reqHeader)
}

//get user projects
export const userProjectsAPI = async(reqHeader) => {
    return await commonAPI("get",`${serverURL}/get-projects`,'',reqHeader)
}

//delete user project
export const deleteProjectAPI = async(id,reqHeader) => {
    return await commonAPI("delete",`${serverURL}/delete-project/${id}`,{},reqHeader)
}

//update user project
export const updateUserProjectAPI = async(projectId,reqBody,reqHeader) => {
    return await commonAPI("put",`${serverURL}/project/update-user-project/${projectId}`,reqBody,reqHeader)
}