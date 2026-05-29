# EduTrack Frontend

Frontend de la plataforma EduTrack - Sistema de seguimiento académico para el SENA.

## 🚀 Tecnologías

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **React Router** - Enrutamiento
- **Supabase** - Backend como servicio (PostgreSQL)
- **Lucide React** - Iconos

## 📋 Prerrequisitos

- Node.js 18+ instalado
- npm o yarn
- Cuenta de Supabase (opcional, para usar PostgreSQL real)

## 🔧 Instalación

1. Navegar a la carpeta del frontend:
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

Editar `.env` con tus credenciales de Supabase:
```
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-anon-key
```

## 🏃 Ejecutar el proyecto

### Modo desarrollo:
```bash
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

### Modo producción:
```bash
npm run build
npm run preview
```

## 📁 Estructura del proyecto

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── context/        # Contextos de React (Auth, etc.)
│   ├── hooks/          # Custom hooks
│   ├── img/            # Imágenes y logos (logo.png, logo_sin_fondo.png)
│   ├── lib/            # Utilidades y configuraciones (Supabase)
│   ├── pages/          # Páginas de la aplicación
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── UsuariosPage.tsx
│   │   ├── FichasPage.tsx
│   │   └── SeguimientoPage.tsx
│   ├── types/          # Definiciones de TypeScript
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   └── index.css       # Estilos globales
├── public/             # Archivos estáticos
├── index.html          # HTML principal
├── package.json        # Dependencias
├── tailwind.config.js  # Configuración de Tailwind
├── tsconfig.json       # Configuración de TypeScript
└── vite.config.ts      # Configuración de Vite
```

## 🔐 Autenticación

El sistema de autenticación está configurado para trabajar con el backend NestJS en `http://localhost:3000`, pero incluye un sistema de fallback con datos mock cuando el backend no está disponible.

**Credenciales de prueba (funcionan sin backend):**
- Email: `admin@sena.edu.co`
- Contraseña: `admin123`

**Características de autenticación:**
- Validación de credenciales
- Persistencia de sesión en localStorage
- Redirección automática al dashboard después del login
- Protección de rutas con AuthContext
- Manejo de errores con mensajes descriptivos

## 🗄️ Base de Datos (Supabase)

Para usar Supabase PostgreSQL:

1. Crear un proyecto en [supabase.com](https://supabase.com)
2. Crear las tablas necesarias:
   - `usuarios`
   - `fichas`
   - `seguimiento`
3. Configurar las variables de entorno en `.env`
4. El cliente de Supabase está configurado en `src/lib/supabase.ts`

## 🎨 Estilos

El proyecto usa Tailwind CSS con una configuración personalizada que incluye:
- Colores primarios personalizados (azul)
- Componentes reutilizables (botones, inputs, cards)
- Diseño responsive

## 🔗 Integración con Backend

El frontend está configurado para comunicarse con el backend NestJS:
- URL del backend: `http://localhost:3000`
- Proxy configurado en `vite.config.ts` para evitar problemas de CORS

## 📝 Notas importantes

- El frontend actualmente usa datos mock para demostración cuando el backend no está disponible
- La autenticación funciona con datos mock (admin@sena.edu.co / admin123) cuando el backend está desconectado
- Para producción, reemplazar los datos mock con llamadas reales a la API
- La autenticación JWT está implementada con fallback a datos mock
- Supabase está configurado pero opcional - puedes usar el backend NestJS directamente

## ✨ Características Implementadas

### Páginas Principales
- **LoginPage**: Página de inicio de sesión con logo EduTrack, formulario de autenticación y manejo de errores
- **DashboardPage**: Panel principal con estadísticas, actividad reciente, logros destacados y acciones rápidas
- **UsuariosPage**: Gestión de usuarios con tabla de datos, filtros y acciones CRUD
- **FichasPage**: Gestión de fichas con cards informativas y navegación
- **SeguimientoPage**: Seguimiento académico con barras de progreso y estados

### Funcionalidades
- **Autenticación**: Sistema de login con validación y persistencia en localStorage
- **Navegación**: Enrutamiento protegido con React Router
- **Datos Mock**: Funcionalidad completa con datos de prueba cuando el backend no está disponible
- **Diseño Responsive**: Interfaz adaptable a diferentes tamaños de pantalla
- **Logos EduTrack**: Logos con y sin fondo implementados en todas las páginas
- **Favicon**: Logo EduTrack en la pestaña del navegador
- **Dashboard Mejorado**: 
  - 4 tarjetas de estadísticas con tendencias
  - Actividad reciente en tiempo real
  - Logros destacados de aprendices
  - Acciones rápidas para navegación

### Estilos y UX
- **Tailwind CSS**: Framework de estilos con configuración personalizada
- **Colores Personalizados**: Paleta de colores azul primario para identidad EduTrack
- **Componentes Reutilizables**: Cards, botones, inputs con estilos consistentes
- **Iconos Lucide**: Iconos modernos y consistentes en toda la aplicación
- **Animaciones**: Transiciones suaves y efectos hover para mejor UX

## 🚧 Próximos pasos

1. Conectar al backend NestJS real para datos en producción
2. Implementar CRUD completo para usuarios, fichas y seguimiento
3. Agregar validación de formularios
4. Implementar manejo de errores global
5. Agregar tests unitarios
6. Optimizar para producción
7. Implementar sistema de notificaciones
8. Agregar gráficos y visualizaciones de datos

## 👥 Autores

- Santiago José Barbosa Rivas
- Equipo EduTrack SENA
