a = $('.gry_t.thdata').find('tr');
for(var i=0; i<a.length; i++) {
 var b = $($(a[i]).find('td')[0]);
  var ap = $($(a[i]).find('td')[0]).find('a')
  console.log(ap.text().trim(), ap.attr('href'));
}
