# EduTrack - Plataforma de Seguimiento Académico

## Información del Proyecto
**Servicio Nacional de Aprendizaje - SENA**
**Programa:** Aplicaciones y Servicios para la Nube
**Ficha:** 3335994
**Docente:** Jorge Enrique Callejas Franco

### Autores
- Santiago José Barbosa Rivas
- Emanuel Mancípe Romero
- Rebeca Judith Rivera Mendoza
- Oscar David Valencia Álvarez (Colaborador en informe técnico)

---

## Introducción
EduTrack es una plataforma diseñada para optimizar el seguimiento académico y la gestión de procesos formativos. Su objetivo principal es simplificar la recolección, el procesamiento y la visualización de datos académicos en tiempo real, permitiendo una toma de decisiones informada para aprendices, instructores y coordinadores.

## Alcance del Proyecto
El proyecto cubrirá las siguientes funcionalidades principales:
- Registro, consulta y gestión de información académica.
- Acceso diferenciado por roles (Administrador, Docente/Instructor, Estudiante/Aprendiz).
- Generación de reportes y gráficos de rendimiento.
- Emisión de alertas automatizadas por bajo desempeño.
- Gestión de grupos, asignaturas y periodos académicos.
- Acceso multiplataforma (Web y Móvil).

---

## Requisitos del Sistema (IEEE 830)

### Requisitos Funcionales (RF)
| Código | Nombre | Descripción | Prioridad |
|--------|--------|-------------|-----------|
| RF-01 | Inicio de Sesión | Autenticación con correo y contraseña. | Alta (Must Have) |
| RF-02 | Registro de Aprendices | Registro de nuevos aprendices asociados a una ficha. | Alta (Must Have) |
| RF-03 | Carga de Evidencias | Subida de archivos para actividades. | Media (Could Have) |
| RF-04 | Seguimiento Académico | Visualización del avance por competencia. | Alta (Must Have) |
| RF-05 | Generación de Reportes | Informes descargables en PDF. | Media (Could Have) |
| RF-06 | Panel Administrativo | Estadísticas globales para coordinadores. | Alta (Must Have) |

### Requisitos No Funcionales (RNF)
| Código | Tipo | Descripción | Prioridad |
|--------|------|-------------|-----------|
| RNF-01 | Seguridad | Cifrado de contraseñas (SHA-256). | Alta |
| RNF-02 | Usabilidad | Interfaz intuitiva para usuarios no técnicos. | Media |
| RNF-03 | Rendimiento | Carga de vistas en menos de 3 segundos. | Alta |
| RNF-04 | Compatibilidad | Funcionamiento en Chrome, Firefox y Edge. | Media |
| RNF-05 | Disponibilidad | Operatividad del 99% del tiempo. | Alta |

---

## Estructura de Trabajo (Jira)
El proyecto se gestiona bajo metodología **Scrum** con las siguientes Épicas:
1. Gestión de Usuarios
2. Gestión Académica
3. Seguimiento del Aprendiz
4. Reportes e Indicadores
5. Panel Administrativo

---

## Trazabilidad Inicial
| Requisito | Historia de Usuario | Prototipo Asociado | Estado |
|-----------|----------------------|--------------------|--------|
| RF-01 | HU-01: Iniciar sesión | Login – Pantalla 1 | Diseñado |
| RF-04 | HU-05: Ver mi progreso | Dashboard – Pantalla 3 | Diseñado |
| RF-02 | HU-03: Registrar aprendiz | Gestión de aprendiz – Pantalla 2 | Diseñado |

---

## Desarrollo Técnico
Este repositorio contendrá la implementación de la API (Backend) y el Cliente (Frontend) de acuerdo a los lineamientos de la evidencia **GA6-220501123-AA2-EV01**.
