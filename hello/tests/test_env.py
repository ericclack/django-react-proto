import os
from django.test import TestCase


class EnvTestCase(TestCase):

    def _test_it(self, key):
        self.assertTrue(key in os.environ)

    def testPath(self):
        self._test_it('PATH')

    def testEnv(self):
        self._test_it('DATABASE_URL')

