const puppeteer = require("puppeteer");

(async () => {
  //Variables for your page object to interact with.
  //CSS Selectors:
  const input = "div.search";
  //XPATH Example:
  const submit = "(//input[@type='submit'])[1]";
  const title = "//img[@title='RuneScape']";

  const browser = await puppeteer.launch({
    //Here you can add custom arguments to your browser
    //i.e. Running headless or headful, changing viewport size.
    //possibly ignoring certain warnings but I haven't tried.
    args: [
      '--window-size=1920,1080',
    ],
  });

  //Your page object allows you to navigate to a specified URL
  const page = await browser.newPage();
  await page.goto("https://secure.runescape.com/m=itemdb_rs/");

  await page.waitForXPath(title);
  await page.screenshot({path: "homepage.png"})

  //Page object can wait on a variety of categories before proceeding.
  await page.waitForSelector(input);
  //
  await page.type(input, "Willow");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
