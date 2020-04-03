<template>
  <q-layout>
    <q-page padding>
      <q-card class="my-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <div class="text-overline">UserID : {{ detail.userId }}</div>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ detail.title }}</div>
            <q-badge color="blue" v-if="detail.completed">
              Sudah Selesai
            </q-badge>
            <q-badge color="red" v-else>Belum Selesai</q-badge>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat color="primary" to="/todo">
            Back
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      try {
        const res = await this.$axios.get(`todos/${this.$route.params.id}`);
        this.detail = res.data;
      } catch (error) {
        console.log(error);

        const data = this.$q.localStorage.getItem("todo");

        data.map(item => {
          if (item.id == this.$route.params.id) {
            this.detail = item;
          }
        });
      }
    }
  }
};
</script>

<style></style>
