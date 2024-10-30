document.addEventListener('DOMContentLoaded', function () {
  let tabList = document.getElementsByClassName('tab-item');
  //console.log(tabList);
  tabList[0].classList.add('active');
  document.getElementsByClassName('content')[0].classList.add('active');
  Array.from(tabList).forEach(function (tabItem) {
    
    tabItem.addEventListener('click', function () {
      Array.from(tabList).forEach(function (tabItem) {
        tabItem.classList.remove('active');
      });
      tabItem.classList.add('active');
      let content = tabItem.getAttribute('data-field');
      //console.log(document.getElementById(content));
      Array.from(document.getElementsByClassName('content')).forEach(function (contentItem) {
        contentItem.classList.remove('active');
        contentItem.classList.add('hidden');
      });
      document.getElementById(content).classList.toggle('hidden');
    });
  });

  let list = document.getElementsByClassName('side');
  let lastclick = '';
  //console.log(list);
  Array.from(list).forEach(function (listItem) {
    listItem.addEventListener('click', function () {
      //console.log(listItem);
      
      Array.from(list).forEach(function (listItem) {
        if (listItem.lastElementChild.classList.contains('submenu')) {
          
            
            listItem.lastElementChild.classList.add('hidden');
          
          }
          
        })
      //for (let i = 0; i < list.length; i++) {
      //  if (list[i].lastElementChild.classList.contains('submenu')) {
      //    if (!(list[i].lastElementChild.classList.contains('hidden'))) {
      //      continue;
      //    } else {
      //      list[i].lastElementChild.classList.add('hidden');
      //    }
      //  }
      //}
      
      if (listItem.lastElementChild.classList.contains('submenu')) {
        
        
        listItem.lastElementChild.classList.toggle('hidden');
        
      }
      
      if (lastclick == listItem) {
        lastclick.lastElementChild.classList.add('hidden');
        lastclick = '';
      } else {
        lastclick = listItem;
      }
      
    });
  });
})