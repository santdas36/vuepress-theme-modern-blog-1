<template>
  <div id="vuperess-theme-blog__post-layout">
    <main class="vuepress-blog-theme-content p-lg-1">
      <div class="span-wrap pb-2 mb-4 shadow">
      <img
        :src="$frontmatter.image"
        :alt="$frontmatter.title"
        v-if="$frontmatter.image"
      />
      <h1 align="center" class="mx-2 mt-4">{{ $frontmatter.title }}</h1>
      <PostInfo
        :date="$frontmatter.date"
        :timeToRead="$page.readingTime.text"
        class="text-secondary d-flex justify-content-center my-3"
      />
      <social-share class="d-flex justify-content-center my-3" />
      </div>
      <div class="d-flex justify-content-center mb-4">
        <router-link
          :to="'/category/'+tag"
          v-for="tag in $page.frontmatter.tags"
          :key="tag"
          class="el-button el-button--small text-decoration-none d-inline-block"
        >#{{tag}}</router-link>
      </div>
      <Content class="shadow no-select"/>
      <Toc />
      <ClientOnly v-if="$themeConfig.disqus">
        <div class="comments-area mt-5 pt-5">
          <Disqus
            :shortname="$themeConfig.disqus"
            class="disqus-comments"
          />
        </div>
      </ClientOnly>
    </main>
  </div>
</template>

<script>
import Toc from "@theme/components/Toc.vue";
import PostInfo from "@theme/components/PostInfo.vue";

export default {
  components: {
    Toc,
    PostInfo,
  }
};
</script>

<style lang="stylus">
.vuepress-blog-theme-content {
  font-size: 16px;
  letter-spacing: 0px;
  color: #2c3e50;
  position: relative;
  padding: 15px 30px;

  .span-wrap {
    border-radius: 10px;

    img {
      border-radius: 10px 10px 0 0;
    }
  }
  .content__default {
    border-radius: 10px;
    padding: 2rem;

    h1, h2, h3, h4 {
      padding-top: 2rem;
    }

    @media (max-width: $MQMobileNarrow) {
      padding: 1.2rem;
    }
  }
}

.post-tags {
  padding: 0;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.disqus-comments {
  margin-top: 0rem;
}
.no-select {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.blog-tag {
  display: inline-flex;
  align-items: center;
  height: 45px;
  word-break: break-word;
  font-size: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 0 15px;
  border-radius: 5px;
  font-weight: 300;
  text-align: left;
  box-sizing: border-box;
  transition: background-color 0.3s;
  color: #222;
  border: 1px solid #222;
  transition: all 0.5s;

  &:hover {
    color: $accentColor !important;
    border: 1px solid $accentColor;
    box-shadow: 0 0 5px $accentColor;
  }

  a {
    text-decoration: none !important;
  }
}

@media screen and (max-width: 768px) {
  .blog-tag {
    font-size: 14px;
    padding: 3px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

<style src="prismjs/themes/prism-okaidia.css"></style>

