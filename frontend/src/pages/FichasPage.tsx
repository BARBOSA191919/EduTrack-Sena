import { useState, useEffect } from 'react'
import { Plus, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Ficha } from '../types'

export default function FichasPage() {
  const navigate = useNavigate()
  const [fichas, setFichas] = useState<Ficha[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Reemplazar con llamada real a la API
    setTimeout(() => {
      setFichas([
        {
          id: '1',
          codigo: '220501',
          programa: 'Tecnólogo en Análisis y Desarrollo de Software',
        },
        {
          id: '2',
          codigo: '220502',
          programa: 'Técnico en Control de Procesos Electrónicos',
        },
      ])
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <img src="/src/img/logo_sin_fondo.png" alt="EduTrack Logo" className="w-8 h-8 object-contain" />
              <h1 className="text-2xl font-bold text-gray-900">Gestión de Fichas</h1>
            </div>
            <button className="btn-primary flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Nueva Ficha</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Cargando fichas...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fichas.map((ficha) => (
              <div key={ficha.id} className="card hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                    {ficha.codigo}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {ficha.programa}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-600">24 aprendices</span>
                  <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                    Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
