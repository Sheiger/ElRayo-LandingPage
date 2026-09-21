import { animate, inView } from 'motion';

const suave: [number, number, number, number] = [0.22, 1, 0.36, 1];

document.documentElement.dataset.motion = 'ok';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  inView(
    '[data-reveal]',
    (elemento) => {
      const el = elemento as HTMLElement;
      animate(
        el,
        { opacity: [0, 1], y: [24, 0] },
        { duration: 0.7, delay: Number(el.dataset.delay ?? 0), ease: suave }
      );
    },
    { margin: '0px 0px -10% 0px' }
  );
  
  inView(
  '[data-trazo]',
  (el) => {
    animate(el, { scaleX: [0, 1] }, { duration: 0.9, ease: [0.65, 0, 0.35, 1] });
  },
  { margin: '0px 0px -10% 0px' }
);
}