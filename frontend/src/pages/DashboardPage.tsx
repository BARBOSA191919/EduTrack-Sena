import { useAuth } from '../context/AuthContext'
import { LogOut, Users, BookOpen, TrendingUp, LayoutDashboard, Activity, Award, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/src/img/logo_sin_fondo.png" alt="EduTrack Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-2xl font-bold text-gray-900">EduTrack</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">
                Bienvenido, <span className="font-medium">{user?.nombre}</span>
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-5 h-5" />
                <span>Cerrar Sesión</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Panel Principal</h2>
          <p className="text-gray-600 mt-2">Bienvenido a la plataforma de seguimiento académico</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/usuarios')}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Usuarios</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">156</p>
                <p className="text-green-600 text-xs mt-1">+12% este mes</p>
              </div>
              <div className="bg-primary-100 p-3 rounded-full">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/fichas')}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Fichas</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">24</p>
                <p className="text-green-600 text-xs mt-1">+3 nuevas</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/seguimiento')}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Seguimientos</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">89%</p>
                <p className="text-green-600 text-xs mt-1">+5% mejora</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="card hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Actividad</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">24</p>
                <p className="text-gray-500 text-xs mt-1">Hoy</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-primary-600" />
              Actividad Reciente
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Juan Pérez completó competencia</p>
                  <p className="text-xs text-gray-500">Hace 5 minutos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Nuevo usuario registrado</p>
                  <p className="text-xs text-gray-500">Hace 15 minutos</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="bg-purple-100 p-2 rounded-full">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Ficha 220501 actualizada</p>
                  <p className="text-xs text-gray-500">Hace 1 hora</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary-600" />
              Logros Destacados
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-green-800">Mejor desempeño</span>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">98%</span>
                </div>
                <p className="text-sm text-gray-700">María García - ADSO</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-800">Más activo</span>
                  <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full">156h</span>
                </div>
                <p className="text-sm text-gray-700">Carlos López - ADSO</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-800">Progreso rápido</span>
                  <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">+45%</span>
                </div>
                <p className="text-sm text-gray-700">Ana Martínez - ADSO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => navigate('/usuarios')}
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <Users className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-center font-medium text-gray-700">Gestionar Usuarios</p>
            </button>
            <button
              onClick={() => navigate('/fichas')}
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <BookOpen className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-center font-medium text-gray-700">Ver Fichas</p>
            </button>
            <button
              onClick={() => navigate('/seguimiento')}
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
            >
              <TrendingUp className="w-6 h-6 text-primary-600 mx-auto mb-2" />
              <p className="text-center font-medium text-gray-700">Seguimiento Académico</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
