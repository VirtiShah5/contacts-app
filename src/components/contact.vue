<template>
  <el-card class="box-card">
    <div @click="goto">
      <el-row :gutter="5">
        <el-col :span="4">
          <img class="image" :src="contact.avatar" height="100" width="100" />
        </el-col>
        <el-col :span="18">
          <p>{{ contact.first_name }} {{ contact.last_name }}</p>
          <p>{{ contact.email }}</p>
        </el-col>
        <el-col :span="2">
          <div class="favorite">
            <i class="el-icon-star-on" v-if="checkFavorite"></i>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Contact",
  props: {
    contact: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {
    goto() {
      this.$router.push(`/contact/detail/${this.contact.id}`);
    },
  },
  computed: {
    ...mapGetters({ favourites: "contacts/favoritesList" }),
    checkFavorite() {
      const find = this.favourites.find(
        (favorite) => favorite.id === this.contact.id
      );
      if (find) return true;
      else return false;
    },
  },
};
</script>

<style>
.image {
  border-radius: 50%;
}
.favorite {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}
</style>
