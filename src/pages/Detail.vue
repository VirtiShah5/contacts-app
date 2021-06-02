<template>
  <div>
    <div class="card-position ">
      <!-- <el-card class="box-card box-size"> -->
      <div class="wrapper box-size">
        <div class="profile-card js-profile-card">
          <div class="profile-card__img">
            <img :src="contactDetail.avatar" alt="profile card" />
          </div>

          <div class="profile-card__cnt js-profile-cnt">
            <div class="profile-card__name">
              {{ contactDetail.first_name }} {{ contactDetail.last_name }}
            </div>
            <div class="profile-card__txt">
              {{ contactDetail.email }}
            </div>
            <div class="profile-card-inf">
              <div class="profile-card-inf__item">
                <div class="profile-card-inf__title">1598</div>
                <div class="profile-card-inf__txt">Followers</div>
              </div>

              <div class="profile-card-inf__item">
                <div class="profile-card-inf__title">65</div>
                <div class="profile-card-inf__txt">Following</div>
              </div>

              <div class="profile-card-inf__item">
                <div class="profile-card-inf__title">123</div>
                <div class="profile-card-inf__txt">Articles</div>
              </div>

              <div class="profile-card-inf__item">
                <div class="profile-card-inf__title">85</div>
                <div class="profile-card-inf__txt">Works</div>
              </div>
            </div>
            <div class="favorite">
              <el-button
                type="warning"
                icon="el-icon-star-off"
                circle
                v-if="showFavorite"
                @click="addToFavorite"
              ></el-button>
              <p>{{ displayMessage }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- </el-card> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getContactById } from "../services/contacts";
export default {
  data() {
    return {
      contactId: "",
      contactDetail: {},
      showFavorite: false,
      displayMessage: "",
    };
  },
  methods: {
    async getContactDetails() {
      const response = await getContactById(this.contactId);
      this.contactDetail = response.data;
    },
    addToFavorite() {
      this.$store.commit("contacts/set_favorite", this.contactDetail);
      this.$message({
        message: "Added to Favourites successfully",
        type: "success",
      });
    },
    checkFavorite() {
      const find = this.favourites.find(
        (favorite) => favorite.id === this.contactDetail.id
      );
      if (!find) {
        this.showFavorite = false;
        this.displayMessage = "Already added to Favourites";
      } else {
        this.showFavorite = true;
        this.displayMessage = "Add to Favourites";
      }
    },
  },
  mounted() {
    if (this.$route.params && this.$route.params.id) {
      this.contactId = this.$route.params.id;
      this.getContactDetails();
    }
    this.checkFavorite();
  },

  computed: {
    ...mapGetters({ favourites: "contacts/favoritesList" }),
  },
};
</script>

<style>
.card-position {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-size {
  margin-top: 5%;
  width: 50%;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.wrapper {
  height: auto;
  min-height: 10vh;
  padding: 50px 20px;
  padding-top: 100px;
  display: flex;
  background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
  display: flex;
  background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);
}
.profile-card-message .profile-card__overlay {
  opacity: 1;
  pointer-events: auto;
  transition-delay: 0.1s;
}
.profile-card-form {
  transform: none;
  transition-delay: 0.1s;
}
.profile-card .active .profile-card__cnt {
  filter: blur(6px);
}
.profile-card__img {
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  box-shadow: 0px 5px 50px 0px rgb(108, 68, 252),
    0px 0px 0px 7px rgba(107, 74, 255, 0.5);
}
.profile-card__img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.profile-card__cnt {
  margin-top: -35px;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 40px;
  transition: all 0.3s;
}
.profile-card__name {
  font-weight: 700;
  font-size: 24px;
  color: #6944ff;
  margin-bottom: 15px;
}
.profile-card__txt {
  font-size: 18px;
  font-weight: 500;
  color: #324e63;
  margin-bottom: 15px;
}
.profile-card-inf {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 35px;
}
.profile-card-inf__item {
  padding: 10px 7px;
  min-width: 150px;
}
.profile-card-inf__title {
  font-weight: 700;
  font-size: 27px;
  color: #324e63;
}
.profile-card-inf__txt {
  font-weight: 500;
  margin-top: 7px;
}
.profile-card {
  width: 100%;
  min-height: 460px;
  margin: auto;
  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  background: #fff;
  border-radius: 12px;
  max-width: 700px;
  position: relative;
}
.favorite {
  padding: 25px;
  display: flex;
  justify-content: center;
}
</style>
