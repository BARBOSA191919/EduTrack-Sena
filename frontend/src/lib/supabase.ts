import { createClient } from '@supabase/supabase-js'

// TODO: Reemplazar con tus credenciales reales de Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://tu-proyecto.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'tu-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

// Tipos para las tablas de Supabase
export interface Database {
  public: {
    Tables: {
      usuarios: {
        Row: {
          id: string
          nombre: string
          email: string
          password: string
          rol: 'ADMIN' | 'DOCENTE' | 'APRENDIZ'
          estado: boolean
          created_at: string
        }
        Insert: {
          id?: string
          nombre: string
          email: string
          password: string
          rol: 'ADMIN' | 'DOCENTE' | 'APRENDIZ'
          estado?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          nombre?: string
          email?: string
          password?: string
          rol?: 'ADMIN' | 'DOCENTE' | 'APRENDIZ'
          estado?: boolean
          created_at?: string
        }
      }
      fichas: {
        Row: {
          id: string
          codigo: string
          programa: string
          created_at: string
        }
        Insert: {
          id?: string
          codigo: string
          programa: string
          created_at?: string
        }
        Update: {
          id?: string
          codigo?: string
          programa?: string
          created_at?: string
        }
      }
      seguimiento: {
        Row: {
          id: string
          aprendiz_id: string
          competencia: string
          avance: number
          estado: string
          fecha_ultima_actualizacion: string
        }
        Insert: {
          id?: string
          aprendiz_id: string
          competencia: string
          avance: number
          estado: string
          fecha_ultima_actualizacion?: string
        }
        Update: {
          id?: string
          aprendiz_id?: string
          competencia?: string
          avance?: number
          estado?: string
          fecha_ultima_actualizacion?: string
        }
      }
    }
  }
}
