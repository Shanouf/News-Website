//fetching news info from a json file
let apiKey='95f976472abf464c840aea92f549b63b';
let source='ca';
let url=`https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`;
//bringing in the element which will contain all the news displayed
let newsContainer=document.getElementById('accordionExample');
//making a get request and populating the DOM
let xhr= new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload= function(){
    if(this.status==200){
        let object=JSON.parse(this.responseText);
        let newsArray= object.articles;
        let newsHTML=``;
        newsArray.forEach((element, index) => {
            newsHTML+=` <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button id="${index}" class="accordion-button" onclick="show(this.id)" style="background-color: #eb5d5d; color: white;" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                ${element.title}
              </button>
            </h2>
            <div id="new${index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body" style="background-color: #f7f5f5;">
                ${element.content}
              </div>
              <div style="background-color: #f7f5f5; padding-left: 18px;">
              Read more on this topic- <a href='${element.url}' target="_blank" style="text-decoration: none;">read more...</a>
              </div>
              <div style="background-color: #f7f5f5; padding-left: 18px;">- by ${element.author}</div>
            </div>
          </div>`
        });
        newsContainer.innerHTML=newsHTML;
      }
      else{
        document.write('some error occured');
      }
    }
//to send the get request
xhr.send();
//function to show only the clicked section
function show(index){
  let showelement= document.getElementById(`new${index}`);
  if(showelement.style.display=='none'){
    showelement.style.display='block';
  }
  else{
    showelement.style.display='none';
  }
}