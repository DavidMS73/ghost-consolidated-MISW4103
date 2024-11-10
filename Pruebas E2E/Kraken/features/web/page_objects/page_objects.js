const { PageCreationPageObject } = require("./pages/page_creation");
const { PagesListPageObject } = require("./pages/pages_list");
const { LoginPageObject } = require("./login");
const { SideBarPageObject } = require("./side_bar");
const { TagsListPageObject } = require("./tags/tags_list");
const { TagCreationPageObject } = require("./tags/tag_creation");
const { PostListPageObject } = require("./posts/post_list");
const { PostCreationPageObject } = require("./posts/post_creation");

module.exports = {
  PageCreationPageObject,
  PagesListPageObject,
  LoginPageObject,
  SideBarPageObject,
  TagsListPageObject,
  TagCreationPageObject,
  PostListPageObject,
  PostCreationPageObject,
};
