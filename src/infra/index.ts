export const BACKEND_URL = 'https://api.help-guincho.co'
export enum HttpStatusCode {
  ok = 200,
  created = 201,
  accepted = 202,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  rule = 406,
  validation = 422,
  serverError = 500,
  serviceUnavailable = 503,
}
