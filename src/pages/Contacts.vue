<template>
  <div>
    <div class="sort">
      <el-select v-model="value" placeholder="Select" @change="handleChange">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="card-position">
      <el-card class="box-card box-size">
        <Contact
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
        />
      </el-card>
    </div>
  </div>
</template>

<script>
import Contact from "../components/contact";
import { mapGetters } from "vuex";
export default {
  components: {
    Contact,
  },
  name: "Contacts",
  data() {
    return {
      options: [
        {
          value: "asc",
          label: "Ascending",
        },
        {
          value: "desc",
          label: "Descending",
        },
      ],
      value: "",
    };
  },
  computed: {
    ...mapGetters({ contacts: "contacts/contactsList" }),
  },
  methods: {
    handleChange(value) {
      switch (value) {
        case "asc":
          this.contacts.sort((a, b) =>
            a.first_name.localeCompare(b.first_name)
          );
          break;
        case "desc":
          this.contacts.sort().reverse();
          break;
      }
    },
  },
};
</script>

<style scoped>
.card-position {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-size {
  margin-top: 2%;
  width: 50%;
}
.sort {
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 5%;
}
</style>
