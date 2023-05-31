<template>
  <v-row align-content="center" style="height: 100vh">
    <v-col align-self="center">
      <v-card class="mx-auto" max-width="344" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">TEST-STUDY</div>
            <v-list-item-title class="text-h5 mb-1">
              COUNT-CARD {{ currentCount }}</v-list-item-title
            >
            <v-list-item-subtitle
              >ボタンを押すとタイトルの数字が変化します。</v-list-item-subtitle
            >
          </v-list-item-content>

          <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn
            outlined
            rounded
            style="font-size: 24px; font-weight: 400"
            @click="decrement"
            >-</v-btn
          >
          <v-btn
            outlined
            rounded
            style="font-size: 24px; font-weight: 400"
            @click="increment"
            >+</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";

@Component
export default class TestView extends Vue {
  @Getter currentCount!: number;
  @Mutation increment!: () => void;
  @Mutation decrement!: () => void;
}
</script>
