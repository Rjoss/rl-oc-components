var oc=oc||{};oc.components=oc.components||{};oc.components['92d8047bc680ceff3a13102fee16f1e3318ad7ae']=function(model){
  var modelHTML =  model.__html ? model.__html : '';
  var staticPath = model.reactComponent.props._staticPath;
  var props = JSON.stringify(model.reactComponent.props);
  return '<div id="oc-reactRoot-prototype" class="oc-reactRoot-prototype">' + modelHTML + '</div>' +
    '<style>.oc__prototype-styles-css__cmp_drawer__2UbYCLSV{width:375px;margin:0 auto;background:#f5f5f5}.oc__prototype-styles-css__cmp_heading__ccIobpgU{margin:0}.oc__prototype-styles-css__cmp_drawer__link__3fLa2vWm{display:block;padding:1em;text-decoration:none}.oc__prototype-styles-css__cmp_drawer__content__3SroRViD{padding:0 1em 1em 1em;border-top:1px solid #ddd}[data-visible=is-hidden] .oc__prototype-styles-css__cmp_drawer__content__3SroRViD{opacity:0;height:0;overflow:hidden}[data-visible=is-visible] .oc__prototype-styles-css__cmp_drawer__content__3SroRViD{opacity:1}</style>' +
    '<script>' +
    'window.oc = window.oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'.oc__prototype-styles-css__cmp_drawer__2UbYCLSV{width:375px;margin:0 auto;background:#f5f5f5}.oc__prototype-styles-css__cmp_heading__ccIobpgU{margin:0}.oc__prototype-styles-css__cmp_drawer__link__3fLa2vWm{display:block;padding:1em;text-decoration:none}.oc__prototype-styles-css__cmp_drawer__content__3SroRViD{padding:0 1em 1em 1em;border-top:1px solid #ddd}[data-visible=is-hidden] .oc__prototype-styles-css__cmp_drawer__content__3SroRViD{opacity:0;height:0;overflow:hidden}[data-visible=is-visible] .oc__prototype-styles-css__cmp_drawer__content__3SroRViD{opacity:1}\');' +
      'oc.requireSeries([{"global":["Object","assign"],"url":"https://unpkg.com/es6-object-assign@1.1.0/dist/object-assign-auto.min.js","name":"Object.assign"},{"global":"PropTypes","url":"https://unpkg.com/prop-types@15.6.1/prop-types.min.js","name":"prop-types"},{"global":"React","url":"https://unpkg.com/react@16.4.0/umd/react.production.min.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@16.4.0/umd/react-dom.production.min.js","name":"react-dom"}], function(){' +
        'oc.require(' +
          '["oc", "reactComponents", "e05fa67891ff1b0bebe0b5253f7bd0a17160c536"],' + 
          '"' + staticPath + 'react-component.js",' +
          'function(ReactComponent){' +
            'var targetNode = document.getElementById("oc-reactRoot-prototype");' +
            'targetNode.setAttribute("id","");' +
            'ReactDOM.render(React.createElement(ReactComponent,' +  props + '),targetNode);' +
          '}' +
        ');' +
      '});' +
    '});' +
  '</script>'
}