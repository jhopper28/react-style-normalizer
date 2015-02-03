'use strict';

var toUpperFirst = require('./toUpperFirst')
var getPrefix    = require('./getPrefix')

var properties = {
  'alignItems': 1,
  'justifyContent': 1,
  'flex': 1,
  'flexFlow': 1,

  'userSelect': 1,
  'transform': 1,
  'transition': 1,
  'transformOrigin': 1,
  'transformStyle': 1,
  'transitionProperty': 1,
  'transitionDuration': 1,
  'transitionTimingFunction': 1,
  'transitionDelay': 1,
  'borderImage': 1,
  'borderImageSlice': 1,
  'boxShadow': 1,
  'backgroundClip': 1,
  'backfaceVisibility': 1,
  'perspective': 1,
  'perspectiveOrigin': 1,
  'animation': 1,
  'animationDuration': 1,
  'animationName': 1,
  'animationDelay': 1,
  'animationDirection': 1,
  'animationIterationCount': 1,
  'animationTimingFunction': 1,
  'animationPlayState': 1,
  'animationFillMode': 1,
  'appearance': 1
}


module.exports = function(key){

	if (!properties[key]){
		return key
	}

	var prefix = getPrefix(key)

	return prefix?
			prefix + toUpperFirst(key):
			key

}