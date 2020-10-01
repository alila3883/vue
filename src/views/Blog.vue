<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <blog-posts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :content="post.content"
              :date="post.date"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="sidebar">
            <blog-sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import JsonPosts from "../json/blog_posts.json";

export default {
  data: function() {
    return {
      pageName: "Blog",
      pageDescription: "This Is Blog Page",
      posts: JsonPosts
    };
  },
  name: "Blog",
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>
