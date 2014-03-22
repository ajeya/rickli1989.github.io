/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'models/menuItem',
	'collections/menuItems',
	'views/menuList'
], function ($, _, Backbone, MenuItem, MenuItems, MenuListView) {
	'use strict';

	var item3_1 = new MenuItem({
		menuText: 'Orchard is fantastic',
		hasChild: true,
		linkUrl: "dst/orchard-is-fantastic"
	});
	var item3_2 = new MenuItem({
		menuText: 'Orchard is amazing',
		hasChild: true,
		linkUrl: 'dst/orchard-is-amazing'
	});
	var menuList3 = new MenuItems();	

	menuList3.add(item3_1);
	menuList3.add(item3_2);


	var item4_1 = new MenuItem({
		menuText: 'Orchard is fabulous',
		hasChild: true,
		linkUrl: 'electrolux/orchard-is-fabulous'
	});
	var item4_2 = new MenuItem({
		menuText: 'Orchard is extraordinary',
		hasChild: true,
		linkUrl: 'electrolux/orchard-is-extraordinary'
	});
	var menuList4 = new MenuItems();	

	menuList4.add(item4_1);
	menuList4.add(item4_2);

	var item9_1_1 = new MenuItem({
		menuText: 'Design',
		linkUrl: 'merisant/apac/design'
	});

	var item9_1_2 = new MenuItem({
		menuText: 'Stage',
		linkUrl: 'merisant/apac/stage'
	});
	var menuList9_1 = new MenuItems();	

	menuList9_1.add(item9_1_1);
	menuList9_1.add(item9_1_2);

	var item9_1 = new MenuItem({
		menuText: 'Equal - APAC',
		hasChild: true,
		menuItems: menuList9_1,
		linkUrl: 'merisant/apac'
	});
	var menuList9 = new MenuItems();	

	menuList9.add(item9_1);

	var item10_1_1 = new MenuItem({
		menuText: 'Orchard is awsome',
		linkUrl: 'orchard/rick-profile/orchard-is-awsome'
	});

	var item10_1_2 = new MenuItem({
		menuText: 'Hire me',
		linkUrl: 'orchard/rick-profile/hire-me'
	});
	var menuList10_1 = new MenuItems();	

	menuList10_1.add(item10_1_1);
	menuList10_1.add(item10_1_2);

	var item10_1 = new MenuItem({
		menuText: 'Rick Profile',
		hasChild: true,
		menuItems: menuList10_1,
		linkUrl: 'orchard/rick-profile'
	});
	var menuList10 = new MenuItems();	

	menuList10.add(item10_1);

	var item11_1 = new MenuItem({
		menuText: 'I love Orchard',
		linkUrl: 'pfizer/i-love-orchard'
	});
	var item12_1 = new MenuItem({
		menuText: 'Please hire me',
		linkUrl: 'variety/please-hire-me'
	});
	var menuList11 = new MenuItems();	

	var menuList12 = new MenuItems();	
	menuList11.add(item11_1);
	menuList12.add(item12_1);

	var item1 = new MenuItem({
		menuText: 'AMC',
		linkUrl: 'amc'
	});

	var item2 = new MenuItem({
		menuText: 'Beierdorf',
		linkUrl: 'beierdorf'
	});
	var item3 = new MenuItem({
		menuText: 'DST',
		hasChild: true,
		menuItems: menuList3,
		linkUrl: 'dst'
	});


	var item4 = new MenuItem({
		menuText: 'Electrolux',
		hasChild: true,
		menuItems: menuList4,
		linkUrl: 'electrlux'
	});

	var item5 = new MenuItem({
		menuText: 'Fox',
		linkUrl: 'fox'
	});
	var item6 = new MenuItem({
		menuText: 'Galderma',
		linkUrl: 'galderma'
	});

	var item7 = new MenuItem({
		menuText: 'Investa',
		linkUrl: 'investa'
	});

	var item8 = new MenuItem({
		menuText: 'MCN',
		linkUrl: 'mcn'
	});
	var item9 = new MenuItem({
		menuText: 'Merisant',
		hasChild: true,
		menuItems: menuList9,
		linkUrl: "merisant"
	});

	var item10 = new MenuItem({
		menuText: 'Orchard',
		hasChild: true,
		menuItems: menuList10,
		linkUrl: 'orchard'
	});

	var item11 = new MenuItem({
		menuText: 'Pfizer',
		hasChild: true,
		menuItems: menuList11,
		linkUrl: 'pfizer'
	});
	var item12 = new MenuItem({
		menuText: 'Variety',
		hasChild: true,
		menuItems: menuList12,
		linkUrl: 'variety'
	});

	var item13 = new MenuItem({
		menuText: 'Video Ezy'
	});



	var menuList = new MenuItems();	
   	menuList.add(item1);
   	menuList.add(item2);
   	menuList.add(item3);
   	menuList.add(item4);
   	menuList.add(item5);
   	menuList.add(item6);
   	menuList.add(item7);
   	menuList.add(item8);
   	menuList.add(item9);
   	menuList.add(item10);
   	menuList.add(item11);
   	menuList.add(item12);
   	menuList.add(item13);

   	return {
        MenuListCollection: menuList
       
    };

});
