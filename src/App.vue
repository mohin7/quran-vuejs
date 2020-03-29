<template>
  <div>
    <v-app>
      <v-card class="mx-auto overflow-hidden" height="100vh" width="100%">
        <v-app-bar color="deep-purple" dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title>Qur'an</v-toolbar-title>
        </v-app-bar>
        <v-container>
          <v-row>
            <v-col lg="3">
              hi
            </v-col>
            <v-col lg="9">
              <p>{{ allSurah }}</p>
            </v-col>
          </v-row>
        </v-container>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Account</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data: () => ({
    drawer: false,
    allSurahData: ""
  }),
  components: {},
  methods: {
    ...mapActions(["fetchSurahList"])
  },
  created() {
    this.fetchSurahList();
  },
  computed: {
    ...mapGetters(["allSurah"])
  }
};
</script>
