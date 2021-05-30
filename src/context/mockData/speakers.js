import zx7_mobile from '/category-speakers/mobile/image-zx7.jpg';
import zx7_tablet from '/category-speakers/tablet/image-zx7.jpg';
import zx7_desktop from '/category-speakers/desktop/image-zx7.jpg';
import zx9_mobile from '/category-speakers/mobile/image-zx9.jpg';
import zx9_tablet from '/category-speakers/tablet/image-zx9.jpg';
import zx9_desktop from '/category-speakers/desktop/image-zx9.jpg';

const data = [
  {
    id: 6,
    img: {
      mobile: zx9_mobile,
      tablet: zx9_tablet,
      desktop: zx9_desktop,
    },
    name: 'zx9 speaker',
    text: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    new_label: true,
  },
  {
    id: 5,
    img: {
      mobile: zx7_mobile,
      tablet: zx7_tablet,
      desktop: zx7_desktop,
    },
    name: 'zx7 speaker',
    text: 'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    new_label: false,
  },
];
export default data;
