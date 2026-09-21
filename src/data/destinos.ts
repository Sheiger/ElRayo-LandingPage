import { normalizar } from '../utils/texto';

export type Zona = 'norte' | 'centro' | 'sur' | 'selva';

export const zonas: { id: Zona; nombre: string }[] = [
  { id: 'norte', nombre: 'Norte' },
  { id: 'centro', nombre: 'Centro' },
  { id: 'sur', nombre: 'Sur' },
  { id: 'selva', nombre: 'Selva' },
];

export interface Destino {
  nombre: string;
  slug: string;
  zona: Zona;
  departamento?: string;
  delivery: boolean;
  alias: string[];
}

interface Extra {
  delivery?: boolean;
  alias?: string[];
}

function d(nombre: string, zona: Zona, departamento?: string, extra: Extra = {}): Destino {
  return {
    nombre,
    slug: normalizar(nombre).replace(/\s+/g, '-'),
    zona,
    departamento,
    delivery: extra.delivery ?? false,
    alias: extra.alias ?? [],
  };
}

//Cuando consigas la lista de delivery, marcarla es tan simple como
// d('Piura', 'norte', 'Piura', { delivery: true }).

export const destinos: Destino[] = [
  // Norte
  d('Bambamarca', 'norte', 'Cajamarca'),
  d('Barranca', 'norte', 'Lima'),
  d('Cajamarca', 'norte', 'Cajamarca'),
  d('Chepén', 'norte', 'La Libertad'),
  d('Chiclayo', 'norte', 'Lambayeque'),
  d('Chimbote', 'norte', 'Áncash'),
  d('Chota', 'norte', 'Cajamarca'),
  d('Huacho', 'norte', 'Lima'),
  d('Huancabamba', 'norte', 'Piura'),
  d('Huaral', 'norte', 'Lima'),
  d('Huaraz', 'norte', 'Áncash'),
  d('Lambayeque', 'norte', 'Lambayeque'),
  d('Piura', 'norte', 'Piura'),
  d('Sullana', 'norte', 'Piura'),
  d('Talara', 'norte', 'Piura'),
  d('Trujillo', 'norte', 'La Libertad'),
  d('Tumbes', 'norte', 'Tumbes'),

  // Centro
  d('Apata', 'centro', 'Junín'),
  d('Concepción', 'centro', 'Junín'),
  d('Huancayo', 'centro', 'Junín'),
  d('Huánuco', 'centro', 'Huánuco'),
  d('Jauja', 'centro', 'Junín'),
  d('Pucará', 'centro', 'Junín'), // ⚠ confirmar
  d('Sapallanga', 'centro', 'Junín'),
  d('Tambo', 'centro', 'Junín'), // ⚠ confirmar
  d('La Punta', 'centro', 'Junín'), // ⚠ confirmar

  // Sur
  d('Abancay', 'sur', 'Apurímac'),
  d('Alto Siguas', 'sur', 'Arequipa'),
  d('Andahuaylas', 'sur', 'Apurímac'),
  d('Arequipa', 'sur', 'Arequipa'),
  d('Camaná', 'sur', 'Arequipa'),
  d('Cañete', 'sur', 'Lima'),
  d('Chala', 'sur', 'Arequipa'),
  d('Chaparra', 'sur', 'Arequipa'),
  d('Chaviña', 'sur', 'Ayacucho'),
  d('Chincha', 'sur', 'Ica'),
  d('Coracora', 'sur', 'Ayacucho'),
  d('Cusco', 'sur', 'Cusco', { alias: ['cuzco'] }),
  d('Ica', 'sur', 'Ica'),
  d('Incuyo', 'sur', 'Ayacucho'),
  d('Juliaca', 'sur', 'Puno'),
  d('Lucanas', 'sur', 'Ayacucho'),
  d('Nazca', 'sur', 'Ica', { alias: ['nasca'] }),
  d('Pampachiri', 'sur', 'Apurímac'),
  d('Pisco', 'sur', 'Ica'),
  d('Puno', 'sur', 'Puno'),
  d('Puquio', 'sur', 'Ayacucho'),
  d('Quillabamba', 'sur', 'Cusco'),
  d('Sicuani', 'sur', 'Cusco', { alias: ['siguani'] }), // ⚠ confirmar

  // Selva
  d('Aguaytía', 'selva', 'Ucayali'),
  d('Aucayacu', 'selva', 'Huánuco'),
  d('Bellavista', 'selva', 'San Martín'),
  d('Campo Verde', 'selva', 'Ucayali'),
  d('Contamana', 'selva', 'Loreto'),
  d('Iquitos', 'selva', 'Loreto'),
  d('Juanjuí', 'selva', 'San Martín'),
  d('Km 86', 'selva', 'Ucayali'), // ⚠ confirmar
  d('La Morada', 'selva', 'Huánuco'),
  d('Neshuya', 'selva', 'Ucayali'),
  d('Nuevo Progreso', 'selva', 'San Martín'),
  d('Picota', 'selva', 'San Martín'),
  d('Pucallpa', 'selva', 'Ucayali'),
  d('Requena', 'selva', 'Loreto'),
  d('San Alejandro', 'selva', 'Ucayali'),
  d('San Hilarión', 'selva', 'San Martín'),
  d('San Juan de Porongo', 'selva', 'Ucayali'), // ⚠ confirmar
  d('Tarapoto', 'selva', 'San Martín'),
  d('Tingo María', 'selva', 'Huánuco'),
  d('Tocache', 'selva', 'San Martín'),
  d('Uchiza', 'selva', 'San Martín'),
  d('Yurimaguas', 'selva', 'Loreto'),
].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));