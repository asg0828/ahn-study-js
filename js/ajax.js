function initElement() {

    console.log("initElement");
    let trList = new Array(10);
    let tdList = new Array(10);

    let container = document.querySelector('#container');
    /*
    // tr 생성
    for(i = 0; i < trList.length; i++) {
        trList[i] = document.createElement('tr');
    }

    // td 생성
    for(i = 0; i < tdList.length; i++) {
        tdList[i] = document.createElement('td');
        tdList[i].innerText = 'test' + i;
    }

    // td -> tr -> container
    for(i = 0; i < trList.length; i++) {
        for(j = 0; j < tdList.length; j++) {
            //trList[i].innerHTML += tdList[j].outerHTML;
            trList[i].appendChild(tdList[j]);
        }
        container.append(trList[i]);
    }
    */
   
    for(i = 0; i < trList.length; i++) {
        trList[i] = document.createElement('tr');
        for(j = 0; j < tdList.length; j++) {
            tdList[j] = document.createElement('td');
            tdList[j].innerText = 'test' + j;
            trList[i].appendChild(tdList[j]);
        }
        container.appendChild(trList[i]);
    }

}