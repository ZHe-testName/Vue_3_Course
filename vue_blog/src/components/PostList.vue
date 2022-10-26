<template>
  <div>
    <ul
      v-if="posts.length > 0"
    >
      <h3>Post's List</h3>
      <post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @remove="$emit('remove', post)"
      />
    </ul>
    <h3
      v-else
      :style="{color: 'tomato'}"
    >Post's List Is Empty</h3>
  </div>
</template>

<script>
import Post from './Post.vue'
export default {
  components: { Post },
  props: {
    posts: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    margin-top: 35px;
  }
</style>