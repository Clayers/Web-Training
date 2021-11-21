import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      items: [
        {
          label: 'Главная',
          icon: 'pi pi-home',
          to: '/main',
          command: () => {
            document.getElementById('main')!.scrollIntoView({ behavior: 'smooth' });
            this.$router.push('#main');
          },
        },
        { separator: true },
        {
          label: 'О компании',
          icon: 'pi pi-book',
          to: '/about-us',
          command: () => {
            document.getElementById('about-us')!.scrollIntoView({ behavior: 'smooth' });
            this.$router.push('#about-us');
          },
        },
        {
          label: 'Наши заказчики',
          icon: 'pi pi-users',
          to: '/customers',
          command: () => {
            document.getElementById('customers')!.scrollIntoView({ behavior: 'smooth' });
            this.$router.push('#customers');
          },
        },
        {
          label: 'Работа в компании',
          icon: 'pi pi-briefcase',
          to: '/work-in-company',
          command: () => {
            document.getElementById('work-in-company')!.scrollIntoView({ behavior: 'smooth' });
            this.$router.push('#work-in-company');
          },
        },
        {
          label: 'Предложения и услуги',
          icon: 'pi pi-shopping-cart',
          to: '/offers-and-services',
          command: () => {
            document.getElementById('offers-and-services')!.scrollIntoView({ behavior: 'smooth' });
            this.$router.push('#offers-and-services');
          },
        },
        {
          label: 'Контакты',
          icon: 'contacts',
          to: '/',
          command: () => {
            document.getElementById('contacts')!.scrollIntoView({ behavior: 'smooth' });
            this.$router.push('#contacts');
          },
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
});
