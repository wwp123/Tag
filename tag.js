/**
 *  标签组件
 *  可自定义宽度
 **/
class Tags {
    
  constructor() {
    this.init();
  }

  init() {
    let tagWrapList = document.getElementsByClassName('tag-wrap');
    for(let tagWrap of tagWrapList) {
      let tagList = tagWrap.getElementsByClassName('tag-list')[0];
      let tagMoreList = document.createElement('ul');
      tagMoreList.classList.add('tag-more-list', 'clearfix');
      let liList = tagList.getElementsByTagName('li');
      let top = liList[0].offsetTop;
      for(let i = 0; i < liList.length; i++) {
        let offsetTop = liList[i].offsetTop;
        if(offsetTop - top > 0) {
          tagMoreList.append(liList[i]);
          i--;
        }
      }
      if(tagMoreList.children.length > 0) {
        tagWrap.append(tagMoreList);
      }
      tagMoreList.onmouseover = () => {
        tagMoreList.style.display = 'block';
      }
      tagMoreList.onmouseleave = () => {
        tagMoreList.style.display = 'none';
      }
      if(tagMoreList.children.length > 0) {
        let li = document.createElement('li');
        li.classList.add('tag-more');
        li.append('...');
        tagList.append(li);
        let docWidth = document.body.clientWidth;
        li.onmouseover = (e) => {
          e = e || window.event;
          tagMoreList.style.display = 'block';
          tagMoreList.style.position = 'absolute';
          tagMoreList.style.top = e.clientY + 'px';
          if((e.clientX + this.width) > docWidth) {
            tagMoreList.style.left = (e.clientX - this.width) + 'px';
          } else {
            tagMoreList.style.left = e.clientX + 'px';
          }
        }
        li.onmouseleave = () => {
          tagMoreList.style.display = 'none';
        }
        if(li.offsetTop - top > 0) {
          tagMoreList.insertBefore(li.previousElementSibling, tagMoreList.children[0]);
        }
      }
    }
  }
}
