const { When, Then } = require("@cucumber/cucumber");
const scope = require("../support/scope");

// When

When("I click on new page button", async function () {
  await scope.pages.pages.clickNewPageButton();
});

When("I fill the page title with text {string}", async (title) => {
  await scope.pages.pages.fillPageTitle(title);
});

When("I click the page content", async () => {
  await scope.pages.pages.clickPageBody();
});

When("I fill the image with an asset", async function () {
  await scope.pages.pages.fillImageWithAsset();
});

When("I click the add button", async function () {
  await scope.pages.pages.clickAddButton();
});

When("I click the audio button", async function () {
  await scope.pages.pages.clickAudioButton();
});

When("I fill the page content with text {string}", async function (content) {
  await scope.pages.pages.fillPageBodyWithText(content);
});

// Then

Then("I click the pages type filter", async function () {
  await scope.pages.pages.clickPagesTypeFilter();
});

Then("I click the published pages filter", async function () {
  await scope.pages.pages.clickPublishedPagesFilter();
});

Then("I should see the first page with title {string}", async function (title) {
  await scope.pages.pages.validateFirstPageTitle(title);
});
