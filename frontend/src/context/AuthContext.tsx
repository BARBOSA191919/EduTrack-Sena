import React, { createContext, useContext, useState, useEffect } from 'react'
import { Usuario, LoginCredentials, AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Cargar usuario del localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    const storedToken = localStorage.getItem('token')
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (credentials: LoginCredentials) => {
    try {
      // Intentar conectar al backend
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Credenciales inválidas')
      }

      const data = await response.json()
      
      setUser(data.user)
      setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(data.user))
      localStorage.setItem('token', data.access_token)
    } catch (error) {
      console.error('Error en login:', error)
      
      // Usar datos mock cuando el backend no está disponible
      if (credentials.email === 'admin@sena.edu.co' && credentials.password === 'admin123') {
        const mockUser: Usuario = {
          id: '1',
          nombre: 'Admin EduTrack',
          email: 'admin@sena.edu.co',
          rol: 'ADMIN',
          estado: true,
        }
        setUser(mockUser)
        setIsAuthenticated(true)
        localStorage.setItem('user', JSON.stringify(mockUser))
        localStorage.setItem('token', 'mock-token')
        return
      }
      
      throw new Error('Credenciales inválidas')
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider')
  }
  return context
}
