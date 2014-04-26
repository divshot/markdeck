var marked = require('marked');
var _ = require('lodash');

var SECTION_REGEX = /^={2,}(=(?: .*)?)\n$/mgi
var SUBSECTION_REGEX = /^-{2,}(-(?: .*)?)\n$/mgi

var buildSlide = function(meta, source, parseSubsections) {
  if (parseSubsections) {
    var subsections = [meta].concat(source.split(SUBSECTION_REGEX));

    if (subsections.length > 2) {
      var slides = [];
      for (var i = 0; i < subsections.length; i+= 2) {
        slides.push(buildSlide(subsections[i], subsections[i+1], false));
      }
      
      return slides;
    } else {
      return buildSlide(meta, source, false);
    }
  } else {
    return {
      source: source.trim(),
      decoration: meta.substr(2)
    }
  }
}

var render = function(slide, options) {
  var out = "<" + options.element;
  if (slide.decoration.length > 0) {
    out += " " + slide.decoration;
  }
  out += ">\n";
  out += marked(slide.source);
  out += "\n</" + options.element + ">";
  
  return out;
}

var markdeck = function(content, options) {
  options = _.extend({
    element: 'section'
  }, options);
  
  marked.setOptions(_.extend({
    sanitize: false,
    smartypants: true
  }, options.markdownOptions));
  
  var sections = content.trim().split(SECTION_REGEX);
  
  // Add a blank meta to the top if not present
  if (sections[0].indexOf('=') != 0) {
    sections.unshift("=");
  }
  
  var slides = [];
  for (var i = 0; i < sections.length; i+= 2) {
    slides.push(buildSlide(sections[i], sections[i+1], true));
  }
  
  var out = "";
  
  slides.forEach(function(slide) {
    if (_.isArray(slide)) {
      out += "\n\n<" + options.element + ">\n";
      slide.forEach(function(subslide) {
        out += render(subslide, options);
      });
      out += "\n</" + options.element + ">";
    } else {
      out += render(slide, options);
    }
  });
  
  return out;
}

module.exports = markdeck