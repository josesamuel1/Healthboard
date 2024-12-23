# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestLogin():
  def setup_method(self, method):
    self.driver = webdriver.Chrome()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_login(self):
    self.driver.get("http://localhost:3000/Login")
    self.driver.set_window_size(1552, 832)
    self.driver.find_element(By.ID, "username").click()
    self.driver.find_element(By.ID, "username").send_keys("admin")
    self.driver.find_element(By.ID, "password").send_keys("1234567")
    self.driver.find_element(By.ID, "password").send_keys(Keys.ENTER)
    self.driver.find_element(By.ID, "password").click()
    self.driver.find_element(By.ID, "password").send_keys("12345")
    self.driver.find_element(By.ID, "password").send_keys(Keys.ENTER)
    self.driver.find_element(By.CSS_SELECTOR, ".w-5").click()
  
