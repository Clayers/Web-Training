import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      items: [
        {
          label: 'Главная',
          icon: 'pi pi-home',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        { separator: true },
        {
          label: 'О компании',
          icon: 'pi pi-book',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        {
          label: 'наши заказчики',
          icon: 'pi pi-sign-in',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        {
          label: 'Работа в компании',
          icon: 'pi pi-users',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        {
          label: 'Предложения и услуги',
          icon: 'pi pi-phone',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
        {
          label: 'Контакты',
          icon: 'pi pi-phone',
          to: '/',
          command: () => {
            this.$router.push('/');
          },
        },
      ],
    };
  },
  components: {},
  computed: {},
  methods: {},
});
