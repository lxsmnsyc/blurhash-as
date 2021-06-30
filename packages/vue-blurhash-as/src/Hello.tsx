/** @jsx h */
import { h, defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'Hello',
  props: {
    greeting: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { greeting } = toRefs(props);

    return () => {
      if (process.env.NODE_ENV !== 'production') {
        console.log('This code would not appear on production builds');
      }

      return <h1>Hello {greeting.value}</h1>;
    };
  },
});
