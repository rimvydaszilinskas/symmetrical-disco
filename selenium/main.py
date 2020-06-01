from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from unittest_data_provider import data_provider
import unittest
from ddt import ddt, data, file_data
import datetime
from time import sleep


@ddt
class Test(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()

    def test(self):
        self.driver.get('http://localhost:3000')
        self.assertEqual(self.driver.title, 'KEA')

    def tearDown(self):
        self.driver.close()

    @file_data('./data.json')
    def test_me(self, date, zodiac, choices, prediction):
        self.driver.get('http://localhost:3000')
        date = datetime.datetime.strptime(date, '%Y-%m-%d').date()

        name = self.driver.find_element_by_id('name')
        name.send_keys('Rimvydas')
        date_element = self.driver.find_element_by_id('date')
        date_element.send_keys('{:02d}{:02d}{:04d}'.format(
            date.month, date.day, date.year))

        for choice in choices:
            elem = self.driver.find_element_by_id(choice)
            elem.click()

        submit_button = self.driver.find_element_by_id('submit')
        submit_button.click()

        WebDriverWait(self.driver, 3).until(
            EC.alert_is_present(), 'Timed out waiting for alert')

        alert = self.driver.switch_to.alert

        self.assertIn(zodiac, alert.text)
        self.assertIn(prediction, alert.text)


if __name__ == "__main__":
    unittest.main()
