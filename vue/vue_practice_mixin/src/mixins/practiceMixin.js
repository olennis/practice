export const practiceMixin = {
  methods: {
    practiceMixin() {
      console.log(this.test);
    },
    plus() {
      this.num += 1;
    },
  },
  data() {
    return {
      test: "this is mixin's test",
      num: 0,
    };
  },
};
