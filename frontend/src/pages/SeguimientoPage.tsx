import { useState, useEffect } from 'react'
import { ArrowLeft, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Seguimiento } from '../types'

export default function SeguimientoPage() {
  const navigate = useNavigate()
  const [seguimientos, setSeguimientos] = useState<Seguimiento[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Reemplazar con llamada real a la API
    setTimeout(() => {
      setSeguimientos([
        {
          id: 's1',
          aprendizId: '1',
          competencia: 'Desarrollo de Software',
          avance: 75,
          estado: 'En proceso',
          fechaUltimaActualizacion: new Date().toISOString(),
        },
        {
          id: 's2',
          aprendizId: '1',
          competencia: 'Servicios en la Nube',
          avance: 100,
          estado: 'Aprobado',
          fechaUltimaActualizacion: new Date().toISOString(),
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
          <div className="flex items-center space-x-4 py-4">
            <button
              onClick={() => navigate('/')}
              className="text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <img src="/src/img/logo_sin_fondo.png" alt="EduTrack Logo" className="w-8 h-8 object-contain" />
            <h1 className="text-2xl font-bold text-gray-900">Seguimiento Académico</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Cargando seguimientos...</p>
          </div>
        ) : (
          <div className="space-y-6">
            {seguimientos.map((seg) => (
              <div key={seg.id} className="card">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {seg.competencia}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Estado: {seg.estado}</span>
                      <span>•</span>
                      <span>
                        Actualizado: {new Date(seg.fechaUltimaActualizacion).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-primary-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-2xl font-bold">{seg.avance}%</span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${seg.avance}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
