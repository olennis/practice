<template>
  <div>
    <button @click="test">click</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },

  methods: {
    test() {
      this.$kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "message practice",
          description: "description practice",
          imageUrl:
            "http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            androidExecutionParams: "test",
          },
        },
        itemContent: {
          profileText: "Kakao",
          profileImageUrl:
            "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
          titleImageUrl:
            "http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
          titleImageText: "Cheese cake",
          titleImageCategory: "Cake",
          items: [
            {
              item: "Cake1",
              itemOp: "1000원",
            },
            {
              item: "Cake2",
              itemOp: "2000원",
            },
            {
              item: "Cake3",
              itemOp: "3000원",
            },
            {
              item: "Cake4",
              itemOp: "4000원",
            },
            {
              item: "Cake5",
              itemOp: "5000원",
            },
          ],
          sum: "총 결제금액",
          sumOp: "15000원",
        },
        // social: {
        //   likeCount: 10,
        //   commentCount: 20,
        //   sharedCount: 30,
        // },
        buttons: [
          {
            title: "웹으로 이동",
            link: {
              mobileWebUrl: "https://developers.kakao.com",
            },
          },
          // {
          //   title: "앱으로 이동",
          //   link: {
          //     mobileWebUrl: "https://developers.kakao.com",
          //   },
          // },
        ],
      });
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
