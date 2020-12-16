using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.Threading;

namespace ExposoftwaredotnetTests
{
    
    public class loginTest
    {
        public IWebDriver driver;

        [SetUp]

        public void Setup()
        {
            driver = new ChromeDriver();
            driver.Navigate().GoToUrl("https://proyectoexposoftwarev2.azurewebsites.net/");
        }

        [TestCase("admin", "admin")]
        [TestCase("ana", "1258")]
        [Test]
        public void ValidandoLoginTest(string user, string password)
        {
            IWebElement btnIniciarSesion = driver.FindElement(By.ClassName("btn btn-outline-success"));
            btnIniciarSesion.Click();
            IWebElement txtUser = driver.FindElement(By.Name("username"));
            txtUser.SendKeys(user);
            IWebElement txtPassword = driver.FindElement(By.Name("password"));
            txtPassword.SendKeys(password);
            IWebElement btnLogin = driver.FindElement(By.ClassName("btn btn-primary"));
            btnLogin.Click();
            Thread.Sleep(3000);
            IWebElement btnLogout = driver.FindElement(By.Id("li-Logout"));
            btnLogout.Click();
        }
    }
}
