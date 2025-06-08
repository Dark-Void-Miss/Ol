const createTag = (tag,clas,text)=>{
  let tags = document.createElement(tag)
   tags.className= clas
   tags.textContent = text
   return tags

}


const container =  createTag('div','container')
const tittleName = createTag('h1','tittleName','Оля мы как бы в месте ?)')
const boxBtns = createTag('div','boxBtns')
const btnsYes = createTag('button','btnsYes','Даа')
const btnsNo = createTag('button','btnsNo','нет(')





btnsYes.onclick = function(){
  const titleYes = createTag('h1','titleYes','Уии, только ответ заскринь и мне в тг отправь, а то я не вижу.')
  return container.append(titleYes)
}


btnsNo.onclick = function(){
  const titleNo = createTag('h1','titleYes','Ты хоршо подумала ??????')
  return container.append(titleNo)
}



boxBtns.append(btnsYes,btnsNo)
container.append(tittleName,boxBtns)
document.body.append(container)