// TODO api origin sucks
export const API_ORIGIN = process.env.API_ORIGIN ?? 'http://localhost'
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN ?? 'http://localhost'

export const API_PORT = 8003
export const CLIENT_PORT = 3000

export const API_PATH = `${API_ORIGIN}:${API_PORT}`
export const CLIENT_PATH = `${CLIENT_ORIGIN}:${CLIENT_PORT}`
export const NEXT_API_PATH = '/api'

