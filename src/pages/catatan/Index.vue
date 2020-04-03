<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-input v-model="title" label="Title" />
      <q-input v-model="subtitle" label="Subtitle" />
      <q-input v-model="desc" label="Description" type="textarea" />
      <div class="row">
        <div class="col-6">
          <q-checkbox v-model="completed" label="Sudah" />
        </div>
        <div class="col-6 text-right">
          <q-btn
            color="primary"
            label="Save"
            :loading="loading"
            @click="save"
          />
        </div>
      </div>
      <div class="q-pa-md">
        <p class="text-h4 text-center">Ini Hasilnya</p>
        <div class="row">
          <div
            class="col-4 q-pa-sm"
            v-for="(item, index) in catatan"
            :key="index"
          >
            <q-card
              :dark="item.completed"
              bordered
              :class="(item.completed ? 'bg-grey-9' : '') + ' my-card'"
            >
              <q-card-section>
                <div class="text-h6">{{ item.title }}</div>
                <div class="text-subtitle2">{{ item.subtitle }}</div>
              </q-card-section>
              <q-card-section>
                {{ item.desc }}
              </q-card-section>
              <q-separator dark />
              <q-card-actions align="around">
                <q-btn
                  flat
                  @click="
                    updateCatatan({
                      index: index,
                      updates: { completed: !item.completed }
                    })
                  "
                >
                  {{ item.completed ? "Belum" : "Sudah" }}
                </q-btn>

                <q-btn flat @click.stop="promtDelete(index)">Delete</q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      title: "",
      subtitle: "",
      desc: "",
      completed: false,
      data: []
    };
  },
  methods: {
    ...mapActions("catatan", [
      "updateCatatan",
      "createCatatan",
      "deleteCatatan"
    ]),
    save() {
      this.loading = true;

      let data = {
        title: this.title,
        subtitle: this.subtitle,
        desc: this.desc,
        completed: this.completed
      };

      this.title = "";
      this.subtitle = "";
      this.desc = "";
      this.completed = false;

      // this.$store.commit("catatan/updateCatatan", this.data);
      this.createCatatan(data);

      this.loading = false;
    },
    promtDelete(index) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Realy Delete?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteCatatan(index);
        })
        .onCancel(() => {
          console.log("cancel delete ");
        });
    }
  },
  computed: {
    ...mapGetters("catatan", { catatan: "getCatatan" })
    // catatan() {
    //   // return this.$store.state.catatan.catatan;
    //   return this.$store.getters["catatan/getCatatan"];
    // }
  }
};
</script>

<style></style>
