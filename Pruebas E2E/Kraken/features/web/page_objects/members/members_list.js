const { BasePageObject } = require('../base_page_object');
const { assert } = require('chai');

class MembersListPageObject extends BasePageObject {
    async clickNewMemberButton() {
        const element = await this.driver.$('a[href="#/members/new/"]');
        await element.click();
    }
}

module.exports = { MembersListPageObject };
