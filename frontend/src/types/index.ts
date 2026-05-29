export interface Usuario {
  id: string
  nombre: string
  email: string
  rol: 'ADMIN' | 'DOCENTE' | 'APRENDIZ'
  estado: boolean
}

export interface Ficha {
  id: string
  codigo: string
  programa: string
}

export interface Seguimiento {
  id: string
  aprendizId: string
  competencia: string
  avance: number
  estado: string
  fechaUltimaActualizacion: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface AuthContextType {
  user: Usuario | null
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}
