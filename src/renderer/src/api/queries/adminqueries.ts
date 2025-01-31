// import { number, string } from 'yup'
import { NotificationResponse } from 'electron'
import { API_ENDPOINT } from '../config'
import { apiCall } from '../customApiCall'
import {
  AccountAcitivityResponse,
  Agent,
  AgentByDepartmentResponse,
  AllAgentsResponse,
  AllBannerResponse,
  AllCustomerRespone,
  AlluserResponse,
  ApiResponse,
  Banner,
  Category,
  CategroiesResponse,
  createAgentResponse,
  CreateBannerResponse,
  CreateCategoryResponse,
  CreateDepartmentResponse,
  Customer,
  CustomerTransactionResponse,
  Department,
  DepartmentResponse,
  Notification,
  NotificationsResponse,
  PostCustomerData,
  RateResponse,
  SingleCategoryResponse,
  SIngleCustomerResponse,
  SIngleDepartmentResponse,
  SubcategoriesResponse,
  SubCategory,
  TeamResponse,
  UPdateCustomerResponse
} from './datainterfaces'
// import * from './index'
export const gettAllCustomerss = async ({
  token
}: {
  token: string
}): Promise<AllCustomerRespone> => {
  return await apiCall(API_ENDPOINT.CUSTOMER.AllCustomers, 'GET', undefined, token)
}
export const getCustomerDetails = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<SIngleCustomerResponse> => {
  return await apiCall(`${API_ENDPOINT.CUSTOMER.CustomerDetails}/${id}`, 'GET', undefined, token)
}
export const getCustomerTransactions = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<CustomerTransactionResponse> => {
  return await apiCall(
    `${API_ENDPOINT.CUSTOMER.CustomerTransactions}/${id}`,
    'GET',
    undefined,
    token
  )
}
export const getTransactions = async ({
  token
}: {
  token: string
}): Promise<CustomerTransactionResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.Traansactions}`, 'GET', undefined, token)
}

export const getDepartments = async ({ token }: { token: string }): Promise<DepartmentResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.Departments}`, 'GET', undefined, token)
}
export const getSingleDepartment = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<SIngleDepartmentResponse> => {
  return await apiCall(
    `${API_ENDPOINT.OPERATIONS.GetSingleDepartment}/${id}`,
    'GET',
    undefined,
    token
  )
}
export const getAgentByDepartment = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<AgentByDepartmentResponse> => {
  return await apiCall(
    `${API_ENDPOINT.OPERATIONS.AgentByDepartment}/${id}`,
    'GET',
    undefined,
    token
  )
}

export const getAllAgents = async ({
  token
}: {
  token: string
}): Promise<AgentByDepartmentResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetAllAgents}`, 'GET', undefined, token)
}
export const getRate = async ({ token }: { token: string }): Promise<RateResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetRate}`, 'GET', undefined, token)
}
export const getTeam = async ({ token }: { token: string }): Promise<TeamResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetTeam}`, 'GET', undefined, token)
}
export const getCategories = async ({ token }: { token: string }): Promise<CategroiesResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetCategories}`, 'GET', undefined, token)
}
export const getAllUsers = async ({ token }: { token: string }): Promise<AlluserResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetAllUsers}`, 'GET', undefined, token)
}
export const getSubCategories = async ({
  token
}: {
  token: string
}): Promise<SubcategoriesResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetSubCategories}`, 'GET', undefined, token)
}

export const getSingleCategory = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<SingleCategoryResponse> => {
  return await apiCall(
    `${API_ENDPOINT.OPERATIONS.GetSingleCategory}/${id}`,
    'GET',
    undefined,
    token
  )
}
/*


Post Requests

*/
export const updateCustomer = async ({
  token,
  id,
  data
}: {
  token: string
  id: string
  data: PostCustomerData
}): Promise<UPdateCustomerResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.UpdateCustomer}/${id}`, 'POST', data, token)
}
//create category
export const createCategory = async ({
  token,
  data
}: {
  token: string
  data: Category
}): Promise<CreateCategoryResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.CreateCategory}`, 'POST', data, token)
}

//first delete request
export const deleteCategory = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<CreateCategoryResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.DeleteCategory}/${id}`, 'GET', undefined, token)
}

//edit category
export const editCategory = async ({
  token,
  id,
  data
}: {
  token: string
  id: string
  data: Category
}): Promise<CreateCategoryResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.UpdateCategory}/${id}`, 'POST', data, token)
}
export const editSubCategory = async ({
  token,
  data,
  id
}: {
  token: string
  data: SubCategory
  id: number
}): Promise<CreateCategoryResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.UpdateSubCategory}/${id}`, 'POST', data, token)
}

export const createDepartment = async ({
  token,
  data
}: {
  token: string
  data: Department
}): Promise<CreateDepartmentResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.CreateDepartment}`, 'POST', data, token)
}
export const editDepartment = async ({
  token,
  data,
  id
}: {
  token: string
  data: Department
  id: string
}): Promise<CreateDepartmentResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.UpdateDepartment}/${id}`, 'POST', data, token)
}
export const deleteDepartment = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<CreateDepartmentResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.DeleteDepartment}/${id}`, 'GET', undefined, token)
}
export const createSubCategory = async ({
  token,
  data
}: {
  token: string
  data: SubCategory
}): Promise<CreateCategoryResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.CreateSubCategory}`, 'POST', data, token)
}
export const createBanner = async ({
  token,
  data
}: {
  token: string
  data: Banner
}): Promise<CreateBannerResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.CreateBanner}`, 'POST', data, token)
}

export const getBanner = async ({ token }: { token: string }): Promise<AllBannerResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetBanner}`, 'GET', undefined, token)
}
export const editBanner = async ({
  token,
  data,
  id
}: {
  token: string
  data: Banner
  id: string
}): Promise<CreateBannerResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.UpdateBanner}/${id}`, 'POST', data, token)
}
export const deleteBanner = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<CreateBannerResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.DeleteBanner}/${id}`, 'DELETE', undefined, token)
}

export const createNotification = async ({
  token,
  data
}: {
  token: string
  data: Notification
}): Promise<NotificationResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.CreateNotification}`, 'POST', data, token)
}
export const getNotification = async ({
  token
}: {
  token: string
}): Promise<NotificationsResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetNotification}`, 'GET', undefined, token)
}
export const editNotification = async ({
  token,
  data,
  id
}: {
  token: string
  data: Notification
  id: string
}): Promise<NotificationResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.UpdateNotification}/${id}`, 'POST', data, token)
}
export const deleteNotification = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<NotificationResponse> => {
  return await apiCall(
    `${API_ENDPOINT.OPERATIONS.DeleteNotification}/${id}`,
    'DELETE',
    undefined,
    token
  )
}

export const createAgent = async ({
  token,
  data
}: {
  token: string
  data: Agent
}): Promise<createAgentResponse> => {
  return await apiCall(`${API_ENDPOINT.OPERATIONS.CreateAgent}`, 'POST', data, token)
}

//account activites
export const getAccountActivities = async ({
  token,
  id
}: {
  token: string
  id: string
}): Promise<AccountAcitivityResponse> => {
  return await apiCall(
    `${API_ENDPOINT.OPERATIONS.UserAccountActivity}/${id}`,
    'GET',
    undefined,
    token
  )
}

export const getAllAgentss = async ({ token }: { token: string }): Promise<AllAgentsResponse> => {
  console.log('Url: ', API_ENDPOINT.OPERATIONS.GetAllAgents)
  return await apiCall(`${API_ENDPOINT.OPERATIONS.GetAllAgents}`, 'GET', undefined, token)
}
export const getNotesForCustomer = async (token: string, id: string): Promise<any> => {
  return await apiCall(
    ` ${API_ENDPOINT.OPERATIONS.GetNotesForCustomer}/${id}`,
    'GET',
    undefined,
    token
  )
}
export const createNoteForCustomer = async (
  data: CreateNoteForCustomerReq,
  token: string
): Promise<ApiResponse> =>
  await apiCall(API_ENDPOINT.OPERATIONS.CreateNoteForCustomer, 'POST', data, token)
export const deleteNoteForCustomer = async (noteId: number, token: string): Promise<ApiResponse> =>
  await apiCall(`${API_ENDPOINT.OPERATIONS.DeleteNote}/${noteId}`, 'GET', undefined, token)

export interface CreateNoteForCustomerReq {
  userId: number
  note: string
  title?: string
}
