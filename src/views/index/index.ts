import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      images: [
        {
          itemImageSrc: require('@/assets/img/galleria/1.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/1.1.jpg'),
          alt: 'Description for Image 1',
          title: 'Title 1',
        },
        {
          itemImageSrc: require('@/assets/img/galleria/2.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/2.2.jpg'),
          alt: 'Description for Image 2',
          title: 'Title 2',
        },
        {
          itemImageSrc: require('@/assets/img/galleria/3.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/3.3.jpg'),
          alt: 'Description for Image 3',
          title: 'Title 3',
        },
        {
          itemImageSrc: require('@/assets/img/galleria/4.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/4.4.jpg'),
          alt: 'Description for Image 3',
          title: 'Title 3',
        },
        {
          itemImageSrc: require('@/assets/img/galleria/5.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/5.5.jpg'),
          alt: 'Description for Image 3',
          title: 'Title 3',
        },
        {
          itemImageSrc: require('@/assets/img/galleria/6.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/6.6.jpg'),
          alt: 'Description for Image 3',
          title: 'Title 3',
        },
        {
          itemImageSrc: require('@/assets/img/galleria/7.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/7.7.jpg'),
          alt: 'Description for Image 3',
          title: 'Title 3',
        },
        {
          itemImageSrc: require('@/assets/img/galleria/8.jpg'),
          thumbnailImageSrc: require('@/assets/img/galleria/8.8.jpg'),
          alt: 'Description for Image 3',
          title: 'Title 3',
        },
      ],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5,
        },
        {
          breakpoint: '960px',
          numVisible: 4,
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
});
