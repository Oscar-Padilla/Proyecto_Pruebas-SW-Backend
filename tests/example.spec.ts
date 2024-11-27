import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('Test de inicio de sesión', async ({ page }) => {

  await page.goto('https://www.zegucom.com.mx/');

  await expect(page).toHaveTitle(/Inicio | Zegucom Cómputo/);

  const ButtonLogIn1 = page.locator("a[id='dd_acount_wos']");
  await expect(ButtonLogIn1).toBeVisible();
  await ButtonLogIn1.click();

  const ButtonLogIn2 = page.locator("a[href='/site/login']").nth(0);
  await expect(ButtonLogIn2).toBeVisible();
  await ButtonLogIn2.click();

  const AccountInput = page.locator("input[id='loginform-username']");
  await AccountInput.fill("pruebaspage264@gmail.com");

  const PasswordInput = page.locator("input[id='loginform-password'] ");
  await PasswordInput.fill("987456321Pruebas");

  await page.keyboard.press('Enter');
  await expect(page.locator("a[id='dd_btn_acount']")).toContainText("                                YahelPruebas                                ");


});

test('Test de inicio de sesión con datos incorrectos', async ({page})=> {

  await page.goto('https://www.zegucom.com.mx/');

  await expect(page).toHaveTitle(/Inicio | Zegucom Cómputo/);

  const ButtonLogIn1 = page.locator("a[id='dd_acount_wos']");
  await expect(ButtonLogIn1).toBeVisible();
  await ButtonLogIn1.click();

  const ButtonLogIn2 = page.locator("a[href='/site/login']").nth(0);
  await expect(ButtonLogIn2).toBeVisible();
  await ButtonLogIn2.click();

  const AccountInput = page.locator("input[id='loginform-username']");
  await AccountInput.fill("XXXXXXXXXXXXXXXXXXXXXXXX");

  const PasswordInput = page.locator("input[id='loginform-password'] ");
  await PasswordInput.fill("987456321Pruebass");

  await page.keyboard.press('Enter');
  const errorMessage = page.locator("p[class='help-block help-block-error']").nth(1);
  await expect(errorMessage).toContainText("El usuario o la contraseña son incorrectos.");

});

test('Barra de busqueda', async ({page})=> {
  await page.goto('https://www.zegucom.com.mx/');
  await expect(page).toHaveTitle(/Inicio | Zegucom Cómputo/);

  const searchInput = page.locator("input[class='input-search-autocomplete search']");
  await expect(searchInput).toBeVisible();

  await searchInput.fill("laptops");
  await new Promise(resolve => setTimeout(resolve, 2000)); 
  await page.keyboard.press('Enter');

  const button = page.locator("button[dfd-value-term='laptops']").nth(0);
  await expect(button).toBeVisible();

  await expect(button).toContainText("laptops");

});

test('Producto carrito', async ({page})=> {
  await page.goto('https://www.zegucom.com.mx/');
  await expect(page).toHaveTitle(/Inicio | Zegucom Cómputo/);


  const ButtonItem1 = page.locator("div[class='row carousel-item active']").nth(0);
  await expect(ButtonItem1).toBeVisible();
  await ButtonItem1.click();

  const ButtonItem2 = page.locator("a[id='btn-car']").nth(1);
  await expect(ButtonItem2).toBeVisible();
  await new Promise(resolve => setTimeout(resolve, 2000)); 
  await ButtonItem2.click();

  const ButtonItem3 = page.locator("a[class='add-to-cart rounded btn amber grey-text text-darken-4 z-depth-0']");
  await expect(ButtonItem3).toBeVisible();
  await ButtonItem3.click();

  const ButtonItem4 = page.locator("a[href='/z-cart/index']");
  await expect(ButtonItem4).toBeVisible();
  await ButtonItem4.click();

  const button = page.locator("a[href='/z-cart/delivery-method']");
  await expect(button).toBeVisible();
  await expect(button).toContainText("Siguiente");

})

// test('ir a pagar', async ({ page }) => {

//   await page.goto('https://www.zegucom.com.mx/');

//   await expect(page).toHaveTitle(/Inicio | Zegucom Cómputo/);

//   const ButtonLogIn1 = page.locator("a[id='dd_acount_wos']");
//   await expect(ButtonLogIn1).toBeVisible();
//   await ButtonLogIn1.click();

//   const ButtonLogIn2 = page.locator("a[href='/site/login']").nth(0);;
//   await expect(ButtonLogIn2).toBeVisible();
//   await ButtonLogIn2.click();

//   const AccountInput = page.locator("input[id='loginform-username']");
//   await AccountInput.fill("pruebaspage264@gmail.com");

//   const PasswordInput = page.locator("input[id='loginform-password'] ");
//   await PasswordInput.fill("987456321Pruebas");

//   await page.keyboard.press('Enter');
//   await expect(page.locator("a[id='dd_btn_acount']")).toContainText("                                YahelPruebas                                ");

//   const searchInput = page.locator('input.input-search-autocomplete.search');
//   await page.waitForSelector('input.input-search-autocomplete.search', { state: 'visible' });
//   await expect(searchInput).toBeVisible();



//   await searchInput.fill("laptops");
//   await page.keyboard.press('Enter');

//   const productButton = page.locator('img[src="/images/brands/webp/LV.webp"]').nth(0);
//   await expect(productButton).toBeVisible({ timeout: 0 });
//   await productButton.click();

//   const agregar = page.locator("a[class='add-to-cart-search-fast rounded d-flex justify-center a-items-center waves-effect']").nth(1);
//   await expect(agregar).toBeVisible({ timeout: 0 });
//   await agregar.click();

//   const agregar2 = page.locator("a[class='add-to-cart rounded btn amber grey-text text-darken-4 z-depth-0']").nth(0);
//   await expect(agregar2).toBeVisible();
//   await agregar2.click();





//   const carritobtn = page.locator("a[href='/z-cart/index']").nth(0);;
//   await expect(carritobtn).toBeVisible();
//   await carritobtn.click();




//   const deliverybtn = page.locator("a[href='/z-cart/delivery-method']");
//   await expect(deliverybtn).toBeVisible();
//   await deliverybtn.click();


//   const pgrbtn = page.locator('a:has-text("Siguiente")');
//   await expect(pgrbtn).toBeVisible();
//   await pgrbtn.click();


//   const metpag = page.locator('span:has-text("Tarjeta de Débito/Crédito (todas las tarjetas)")');
//   await expect(metpag).toBeVisible();
//   await metpag.click();
//   await new Promise(resolve => setTimeout(resolve, 5000));


//   const pagarbtn = page.locator('button:has-text("Pagar")');
//   await expect(pagarbtn).toBeVisible();




// });

// test('borrar carrito', async ({ page }) => {
//   await page.goto('https://www.zegucom.com.mx/');

//   await expect(page).toHaveTitle(/Inicio | Zegucom Cómputo/);

//   const searchInput = page.locator('input.input-search-autocomplete.search');
//   await page.waitForSelector('input.input-search-autocomplete.search', { state: 'visible' });
//   await expect(searchInput).toBeVisible();

//   await searchInput.fill("laptops");
//   await page.keyboard.press('Enter');

//   await page.waitForTimeout(10000);// Espera 10 segundos

//   const productButton = page.locator('img[src="/images/brands/webp/LV.webp"]').nth(0); // O el índice correcto
//   await expect(productButton).toBeVisible();
//   await productButton.click();

//   await page.waitForSelector('#btn-car', { state: 'visible' });
//   await new Promise(resolve => setTimeout(resolve, 2000)); 
//   await page.click('#btn-car');
//   await page.waitForTimeout(5000);

//   const carritobtn = page.locator("a[href='/z-cart/index']").nth(0);;
//   await expect(carritobtn).toBeVisible();
//   await carritobtn.click();

//   const deleteButton = page.locator('a:has-text("delete")');
//   await expect(deleteButton).toBeVisible();
//   await deleteButton.click();

//   const chiacepto = page.locator('button:has-text("Aceptar")');
//   await expect(chiacepto).toBeVisible();
//   await chiacepto.click();

// });