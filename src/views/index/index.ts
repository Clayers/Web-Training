import { defineComponent } from 'vue';

import PhotoService from '../../service/PhotoService';

export default defineComponent({
  data() {
    return {
      images: null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5,
        },
        {
          breakpoint: '768px',
          numVisible: 3,
        },
        {
          breakpoint: '560px',
          numVisible: 1,
        },
      ],
    };
  },
  galleriaService: null,
  created() {
    this.galleriaService = new PhotoService();
  },
  mounted() {
    this.galleriaService.getImages().then((data) => (this.images = data));
  },
});
