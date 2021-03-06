# django-react-proto

A barebones Django + React app, e.g. for Single Page Applications, which can easily be deployed to Heroku.


## Local set up

We use `pip` to install Python things and `npm` to install JS things.

First create/activate a virtualenv:

    virtualenv VENV # If you've not already done this
    source VENV/bin/activate

Now install:

    pip install -r requirements.txt
    npm install


## Heroku set up

We need both Python and NodeJS to run our app on Heroku:

    heroku buildpacks:set heroku/nodejs --index 1
    heroku buildpacks:set heroku/python --index 2

### Rollout...

    git push heroku master

### Database set up

(Somehow Heroku knows about the DB addon, see `heroku addons` -- maybe because this was a starter app?)

    heroku run python manage.py migrate

## To Do

1. Get it working on Heroku
 * http://stackoverflow.com/questions/20752611/django-pipeline-heroku-and-sass
 * https://devcenter.heroku.com/articles/using-multiple-buildpacks-for-an-app
1. Better JSX compiler, without Node dependency?
 * https://github.com/caktus/django-jsx
 * https://github.com/facebookarchive/react-python
 * http://stackoverflow.com/search?q=%5Bdjango-pipeline%5D+heroku
1. Add a UI test
1. Add another page, with React Router?
1. Make `import` work in client-side JS? http://stackoverflow.com/questions/31593694/do-i-need-require-js-when-i-use-babel


## Stuff from Heroku...

## Running Locally

Make sure you have Python [installed properly](http://install.python-guide.org).  Also, install the [Heroku Toolbelt](https://toolbelt.heroku.com/) and [Postgres](https://devcenter.heroku.com/articles/heroku-postgresql#local-setup).

```sh
$ git clone git@github.com:heroku/python-getting-started.git
$ cd python-getting-started

$ pip install -r requirements.txt

$ createdb python_getting_started

$ python manage.py migrate
$ python manage.py collectstatic

$ heroku local
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master

$ heroku run python manage.py migrate
$ heroku open
```
or

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)

## Prismic knowhow

Api Doc: https://prismic.io/docs/old/documentation/api-documentation
