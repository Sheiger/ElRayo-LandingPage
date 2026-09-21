export const empresa = {
  nombre: 'El Rayo Logistic',
  razonSocial: 'El Rayo Logistic S.A.C.',
  ruc: '20611156821',
  whatsapp: '51907609200',
  telefono: '+51 907 609 200',
  email: 'el.rayo.logistic@gmail.com',
  direccion: 'Calle C, Mz G43 lt1, Bocanegra S5',
  horario: 'Lunes a sábado, 8:00 a.m. – 7:00 p.m.',
  libroReclamaciones: 'https://...', // el enlace que te dé el proveedor
};

export function linkWhatsapp(mensaje = 'Hola, quiero cotizar un envío desde Lima.') {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const mapaUrl = `https://maps.app.goo.gl/KpX7ZYxUuERuHt3m8`;

