/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-question': '&#xe901;',
		'icon-ruler': '&#xe900;',
		'icon-check': '&#xe876;',
		'icon-cancel': '&#xe611;',
		'icon-add': '&#xe145;',
		'icon-chat': '&#xe0cb;',
		'icon-close': '&#xe5cd;',
		'icon-note': '&#xe14d;',
		'icon-square': '&#xe3c6;',
		'icon-statistic': '&#xe01d;',
		'icon-fitness': '&#xeb43;',
		'icon-info': '&#xe88f;',
		'icon-food': '&#xe56c;',
		'icon-navigate_prev': '&#xe408;',
		'icon-navigate_next': '&#xe409;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
