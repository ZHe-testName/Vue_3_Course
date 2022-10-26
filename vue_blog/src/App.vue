<template>
  <div class="app">
    <h1>Post's Page</h1>

    <div class="app-btns">
      <my-button
        @click="openDialog"
        style="margin-top: 20px"
      >
        Create Post
      </my-button>

      <my-select
        v-model="selectedSort"
        :options="sortOptions"
      />
    </div>

    <my-dialog
      v-model:show="showDialog"
    >
      <post-form
        @createPost='addPost'
      />
    </my-dialog>

    <post-list
      v-if="!isPostsLoading"
      :posts='sortedPosts'
      @remove="removePost"
    />
    <div v-else>
      Post's Loading...
    </div>
  </div>
</template>

<script>
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      showDialog: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'by title',},
        {value: 'body', name: 'by body',},
      ],
    };
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((p1, p2) =>{
        return p1[this.selectedSort]?.localeCompare(p2[this.selectedSort]);
      });
    },
  },
  watch: {
    // selectedSort(newValue) {
    //   this.posts.sort((p1, p2) =>{
    //     return p1[newValue]?.localeCompare(p2[newValue]);
    //   });
    // },
  },
  methods: {
    addPost(post) {
      this.posts.push(post);

      this.showDialog = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    openDialog() {
      this.showDialog = true;
    },
    async fetchPosts() {
      this.isPostsLoading = true;

      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');

        this.posts = response.data;
      } catch (error) {
        console.error('[Axios Error]: ', error);
      } finally {
        this.isPostsLoading = false;
      };
    },
  },
  mounted() {
    this.fetchPosts();
  },
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }

  .app-btns {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
</style>