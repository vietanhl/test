/* istanbul ignore file */
import config from 'config';
//Availability of treatments
export const availability = `${config.API_BASE_URL}/availability`;
//Book
export const book = `${config.API_BASE_URL}/book`;
//Admin employee days and details on their availability
export const employee = `${config.API_BASE_URL}/admin/employee`;
// export const employeeTreatment = `${config.API_BASE_URL}/employeetreatment`;
export const operatingTime = `${config.API_BASE_URL}/admin/operatinghours`;
// Available treatments
export const treatment = `${config.API_BASE_URL}/admin/treatment`;
// Get appointments booked for that day (Admin Calendar)
export const bookedAppointments = `${config.API_BASE_URL}/book`;
// Process booking
export const payment = `${config.API_BASE_URL}/admin/payment`;
export const treatmentType = `${config.API_BASE_URL}/admin/treatmentType`;
// export const workSchedule = `${config.API_BASE_URL}/workschedule`;
