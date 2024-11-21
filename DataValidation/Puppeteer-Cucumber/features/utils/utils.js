const { faker } = require("@faker-js/faker");
const scope = require("../support/scope");

const waitUtil = (millis) =>
  new Promise((resolve) => {
    setTimeout(resolve, millis);
  });

const formatString = (string) => string.trim().replace(/[\n\r\t]/gm, "");

const getText = async (page, selector) => {
  const element = await page.$(selector);
  return await page.evaluate(
    (e) => e.textContent.trim().replace(/[\n\r\t]/gm, ""),
    element
  );
};

const getImageExists = async (page, selector) => {
  const element = await page.$(selector);
  return element !== null;
};

const dataSource = (data) => {
  const regex =
    /\{(?<data_source>data_pool|faker|dynamic_data_pool)\((?<attribute>\w*[-]?\w*)\)\}/;
  const match = regex.exec(data);
  const data_pool = match ? match.groups.data_source : "default";
  const attribute = match ? match.groups.attribute : "";
  return [data_pool, attribute];
};

const subgroup = (attribute) => {
  const splitInfo = attribute.split("-");
  const group = splitInfo[0];
  const attribute_name = splitInfo[1];
  return [group, attribute_name];
};

const fakerData = (attribute) => {
  // Faker random seed
  faker.seed();
  if (attribute === "sentence") {
    return faker.lorem.sentence();
  } else if (attribute === "sentence_5") {
    return faker.lorem.sentence(5);
  } else if (attribute === "sentence_100") {
    return faker.lorem.sentence(100);
  } else if (attribute === "paragraph") {
    return faker.lorem.paragraph(2);
  } else if (attribute === "paragraph_5") {
    return faker.lorem.paragraph(5);
  } else if (attribute === "paragraph_10") {
    return faker.lorem.paragraph(10);
  } else if (attribute === "alphanumeric") {
    return faker.string.alphanumeric(15);
  } else if (attribute === "alphanumeric_100") {
    return faker.string.alphanumeric(100);
  } else if (attribute === "alphanumeric_150") {
    return faker.string.alphanumeric(150);
  } else if (attribute === "alphanumeric_256") {
    return faker.string.alphanumeric(256);
  } else if (attribute === "url") {
    return faker.internet.url();
  } else if (attribute === "email") {
    return faker.internet.email();
  } else if (attribute === "username") {
    return faker.internet.username();
  } else if (attribute === "firstName") {
    return faker.person.firstName();
  } else if (attribute === "lastName") {
    return faker.person.lastName();
  } else if (attribute === "fullName") {
    return faker.person.fullName();
  } else if (attribute === "special_characters") {
    return faker.string.fromCharacters('!"#$%&', 10);
  }
};

const dataProcessor = (data) => {
  let content = data;
  if (data.startsWith("{")) {
    // Get the data pool and the attribute
    let data_source = dataSource(data);
    let data_pool = data_source[0];
    let attribute = data_source[1];
    //Get the data
    if (data_pool === "faker") {
      content = fakerData(attribute);
    } else if (data_pool === "data_pool") {
      console.log(attribute);
      const groupInfo = subgroup(attribute);
      const group = groupInfo[0];
      const attribute_info_split = groupInfo[1].split("_");

      content =
        scope.dataPool[group][attribute_info_split[0]][attribute_info_split[1]];
    } else if (data_pool === "dynamic_data_pool") {
      const groupInfo = subgroup(attribute);
      const group = groupInfo[0];
      const attributeInfo = groupInfo[1];

      content = scope.dynamicDataPool[group][attributeInfo];
    } else if (data_pool === "default") {
      content = data;
    }
  }
  return content;
};

const changeInJson = (obj, fakerWithSeed) => {
  for (const [key, value] of Object.entries(obj)) {
    if (key === "title") {
      obj[key] = value + fakerWithSeed.lorem.sentence(1);
    } else if (key === "description") {
      obj[key] = value + fakerWithSeed.lorem.paragraphs(2);
    } else if (key === "name") {
      obj[key] = value + fakerWithSeed.person.middleName();
    } else if (value && typeof value === "object") {
      changeInJson(value, fakerWithSeed);
    }
  }
};

module.exports = {
  waitUtil,
  getText,
  getImageExists,
  dataProcessor,
  formatString,
  changeInJson,
};