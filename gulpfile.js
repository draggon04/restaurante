'use strict'

const del = require('del');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const mergeStream = require('merge-stream');
const polymerBuild = require('polymer-build');

const imagemin = require('gulp-imagemin');
const uglyfi = require('gulp-uglyfi');

const cssSlam = require('css-slam');
const htmlMinifier = require('gulp-html-minifier');

const polymerJson = require('./polymer.json');
const polymerProject = new polymerBuild.PolymerProject(polymerJson);
const buildDirectory = 'wwwroot';

function waitFor(stream){
	return new Promise((resolve, reject)=>{
		stream.on('end', resolve);
		stream.on('error', reject);
	});
}

function build(){

	return new Promise((resolve, reject)=>{

		let sourceStreamSplitter=new polymerBuild.HtmlSplitter();
		let dependenciesStreamSplitter = new polymerBuild.HtmlSplitter();

		del([buildDirectory])
		.then(()=>{

			let sourcesStream = polymerProject.sources()
									.pipe(gulpIf(/\.(png|gif|jpg|svg)$/, imagemin()))
									.pipe(sourcesStreamSplitter.split())
									.
									.pipe(sourcesStreamSplitter.rejoin())
		})

	});

}