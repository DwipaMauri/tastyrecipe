<template>
  <main>
      <div class="container-md my-5 py-5">
          <recipe-form
              v-if="detailData && !isLoading"
              :isEdit="true" 
              :detailData="detailData">
          </recipe-form>
      </div>
  </main>
</template>

<script setup>
import RecipeForm from '../recipeForm/RecipeForm.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const store = useStore();
const route = useRoute();
const detailData = ref();
const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;
  try {
      const recipeId = route.params.id;
      await store.dispatch("recipe/getRecipeDetail", recipeId);

      detailData.value = store.state.recipe.recipeDetail;
      console.log(detailData.value);
      console.log(store.state);
      isLoading.value = false;
  } catch (err) {
      console.error(err);
  }
});


</script>