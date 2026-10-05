import paqueteria from '../assets/servicios/paqueteria.jpg';
import carga from '../assets/servicios/carga.jpg';
import mudanzas from '../assets/servicios/mudanza.jpg';
import articulos from '../assets/servicios/envios.jpg';
import provincias from '../assets/servicios/provincia.jpg';

export const servicios = [
  {
    titulo: 'Paquetería',
    texto: 'Envío de paquetes pequeños y medianos.',
    foto: paqueteria,
    alt: 'Paquetes embalados listos para su envío',
    icono: 'M21 8v13H3V8 M1 3h22v5H1z M10 12h4',
    mensaje: 'Hola, quiero cotizar el envío de un paquete desde Lima.',
  },
  {
    titulo: 'Carga y mercadería',
    texto: 'Traslado de cajas, bultos y mercadería.',
    foto: carga,
    alt: 'Cajas y mercadería siendo cargadas en una furgoneta',
    icono: 'M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2 M15 18H9 M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14 M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M15 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
    mensaje: 'Hola, quiero cotizar el envío de carga o mercadería desde Lima.',
  },
  {
    titulo: 'Mudanzas',
    texto: 'Traslado de muebles y pertenencias dentro de Lima.',
    foto: mudanzas,
    alt: 'Equipo trasladando un sofá durante una mudanza',
    icono: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8 M3 10a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z',
    mensaje: 'Hola, quiero cotizar una mudanza dentro de Lima.',
  },
  {
    titulo: 'Envíos de artículos grandes',
    texto: 'TV, electrodomésticos, equipos y más.',
    foto: articulos,
    alt: 'Televisor embalado para su transporte',
    icono: 'M2 4h20v12H2z M8 20h8 M12 16v4',
    mensaje: 'Hola, quiero cotizar el envío de un artículo grande desde Lima.',
  },
  {
    titulo: 'Envíos a provincias',
    texto: 'Lima y Callao hacia diferentes destinos del Perú.',
    foto: provincias,
    alt: 'Furgoneta de El Rayo Logistic en carretera hacia provincia',
    icono: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
    mensaje: 'Hola, quiero cotizar un envío a provincia desde Lima.',
  },
];