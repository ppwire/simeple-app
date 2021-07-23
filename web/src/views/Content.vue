<template>
  <div class="flex-col">
    <ContentBar @get-content="getContent" class="mb-5"></ContentBar>
    <Content :name="name" :gender="gender" v-if="showContent"></Content>
  </div>
</template>

<script>
import ContentBar from "@/components/ContentBar.vue";
import Content from "@/components/Content.vue";
export default {
  data() {
    return {
      name: "",
      gender: "",
      profilePic: "",
      showContent: false,
    };
  },
  components: {
    ContentBar,
    Content,
  },
  methods: {
    getContent() {
      console.log("test");
      this.$store
        .dispatch("getUserContent")
        .then((res) => {
          this.name = res.userName;
          this.gender = res.gender;
          this.profilePic = res.profilePic;
          this.showContent = true;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>