import{Browser, BrowserContext, chromium, ElementHandle, Page} from 'playwright'

(async function () {
    const browser: Browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://uat.concierto.cloud/login?realm=Kc2New');

    await page.fill("id=username","Narendiran");
    //await page.click("//a[text()='Narendiran']");

    await page.fill("id=password","@@Password!##123");
    //await page.click("//a[text()='@@Password!##123']");

    await page.click("id=kc-login");
    await page.click("//a[contains(@class,'operations-icon')]");
    await page.click("//span[text()='Incident Management']");
    await page.click("id=addNewTicket");

    await page.fill("(//input[@id='phone'])[1]","+91");
    await page.fill("(//input[@id='phone'])[2]","8110884743");
    await page.fill("//input[@name='site']","Hyderabad");
    //await page.selectOption('#deptID','ITSM Users ');
    //const selectedValue = await page.$eval('#deptID', (element) => element.ariaValueText);
    //const deptID = await page.$("#deptID");
    //await deptID?.selectOption("ITSM Users ");
    await page.selectOption ("//select[@name='deptID']","GR_621e2da275c6be2606155586");
    await page.selectOption("//select[@name='assignUser']","UD_622f053df977b894c87a6ded");
    await page.fill("//input[@name='subjectTxt']", "TESTING");
    await page.selectOption("//select[@name='category']", "CG_60ed77e00c524f976549203c");
    await page.selectOption("//select[@name='subCategory']" ,"SG_60ed94260c524f97657d0f5d");
    await page.selectOption("//select[@name='urgency']", "UR_2");
    await page.selectOption("//select[@name='impact']", "IM_2");
    await page.fill("//textarea[@name='addDescription']", "Testing by Narendiran");
    await page.click("(//button[text()='Save'])[1]");
    await page.click("//span[text()='My Dashboard']");
    await page.waitForTimeout(1000);

    await page.click("//button[@id='My Incidents']");

    let lstServices = await page.locator("div.total-count:visible").elementHandles();

    console.log(lstServices.length);
    
    for (let elm of lstServices) {
        console.log(await elm.innerText());
    }



})();