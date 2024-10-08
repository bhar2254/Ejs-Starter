/*	users.js
	EJS Starter Site, https://ejs-starter.blaineharper.com
	by Blaine Harper

	PURPOSE: Routing for /users/...
*/

//	variables necessary for express
const express = require('express')
const router = express.Router()
const { Page, Breadcrumb } = require('./util/DOM')

/* GET about page. */
router.get('/',
	async function (req, res) {
		const breadcrumb = new Breadcrumb({
			'Home':'/',
			'About':null,
		})
		const page = new Page({
			...req.session.pageDefaults,
			pageTitle: 'About',
			body: `<div class='m-5 mx-auto bg-glass bg-gradient shadow-lg bh-left-bar-secondary col-lg-9 col-md-12 col-sm-12'>
		<div class="text-body container p-4">
			${breadcrumb.render()}
			<div class="text-center text-body container p-4 my-5">
				<div class="mx-auto col-lg-4 col-md-6 col-sm-11 col-xs-12">
					EJS Starter is a template application and demo project for creating new ExpressJS applications with ease. Built-in with scripts for elimiating the worldload as well as EJS teampltes for quick page generation. Create a copy of this project and get started <a href="https://github.com/bhar2254/EJS-Starter">today</a>!
				</div>
			</div>
		</div>
		</div>`
		})
		res.render('pages/blank', { content: page.render() })
	}
)

router.get('/developer',
	async function (req, res) {
		const breadcrumb = new Breadcrumb({
			'Home':'/',
			'About':'/About',
			'Projects':null
		})
		const page = new Page({
			...req.session.pageDefaults,
			pageTitle: 'Developer',
			body: `<div class='m-5 mx-auto bg-glass bg-gradient shadow-lg bh-left-bar-secondary col-lg-9 col-md-12 col-sm-12'>
		<div class="text-body container p-4">
			${breadcrumb.render()}
			<div class="text-center text-body container p-4 my-5">
				<div class="mx-auto col-lg-4 col-md-6 col-sm-11 col-xs-12">
					Hi! My name's Blaine. I make websites and other JavaScript applications. If you're interested in creating your own JavaScript projects like this one, check out my <a href='https://github.com/bhar2254'>GitHub</a> or check out my site <a href='https://blaineharper.com'>BlaineHarper.com</a> for (possibly?) up to date details.
				</div>
			</div>
		</div>
		</div>`
		})
		res.render('pages/blank', { content: page.render() })
	}
)

router.get('/projects',
	async function (req, res) {
		const breadcrumb = new Breadcrumb({
			'Home':'/',
			'About':'/About',
			'Projects':null
		})
		const page = new Page({
			...req.session.pageDefaults,
			pageTitle: 'Projects',
			body: `<div class='m-5 mx-auto bg-glass bg-gradient shadow-lg bh-left-bar-secondary col-lg-9 col-md-12 col-sm-12'>
		<div class="text-body container p-4">
			${breadcrumb.render()}
			<div class="text-center text-body container p-4 my-5">
				<div class="mx-auto col-lg-4 col-md-6 col-sm-11 col-xs-12">
					If you'd like to view my other projects, check out my <a href='https://github.com/bhar2254'>GitHub</a>!
				</div>
			</div>
		</div>
		</div>`
		})
		res.render('pages/blank', { content: page.render() })
	}
)

module.exports = router
