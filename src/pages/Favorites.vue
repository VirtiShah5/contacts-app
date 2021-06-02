<template>
  <div class="card-position">
    <el-card class="box-card box-size">
      <el-card
        class="box-card"
        v-for="(favorite, index) in favourites"
        :key="favorite.id"
      >
        <div>
          <el-row :gutter="5">
            <el-col :span="4">
              <img
                class="image"
                :src="favorite.avatar"
                height="100"
                width="100"
              />
            </el-col>
            <el-col :span="18">
              <div>
                <p>{{ favorite.first_name }} {{ favorite.last_name }}</p>
                <p>{{ favorite.email }}</p>
              </div>
            </el-col>
            <el-col :span="2">
              <el-button
                type="danger"
                icon="el-icon-delete"
                circle
                @click="deleteFavorite(index)"
              ></el-button>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ favourites: "contacts/favoritesList" }),
  },
  methods: {
    deleteFavorite(index) {
      this.$confirm(
        "Are you sure you want to remove this from favourites?",
        "Warning",
        {
          confirmButtonText: "Confirm",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      )
        .then(() => {
          this.$message({
            type: "success",
            message: "Delete complete",
          });
          this.$store.commit("contacts/delete_favorite", index);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
};
</script>

<style></style>
