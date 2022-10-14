// ==UserScript==
// @name         Bú bẩn thịnh hành
// @namespace    https://hentaivn.la/
// @updateURL    https://github.com/HentaiVN210/Bup_ban-v2.0/raw/main/PC_buff.user.js
// @version      2.0.1
// @description  Bú bú bú
// @author       Ừ em
// @include      *
// @require      http://code.jquery.com/jquery-2.1.0.min.js
// @match        https://hentaivn.la/
// @run-at       document-start
// @icon         https://cdn.discordapp.com/attachments/994833515554287666/1027189547114700830/guralacdit.gif
// @grant        none
// ==/UserScript==

function buff(n) {
    const id = document.querySelector("#myInputxx").value;
    for (let i = 1; i<=n; i++){
        let dom = document.querySelector(".bookmark")
        dom.innerHTML = `<span class="bookmark"><a id="click" href="javascript:;" onclick="doAction('${id}','bookmark');">Theo dõi ngay</a></span>`
        document.querySelector("#click").click();
        console.log("bú");
    };
};

document.addEventListener ("DOMContentLoaded", function(){
    if(!document.URL.includes("doc-truyen")){
        return console.log("idle..");
    };
    console.log("sẵn sàng bú bẩn")
    const page = document.querySelector('.page-info');
    const id = document.querySelector("#myInputxx").value;
    var newScript = document.createElement("script");
    newScript.innerHTML = `function doRead(o,t){$("#imgLoader_"+o).css("width","92px"),$.post("ajax_bookmark_topic.php",{book_id:o,book_type:t},function(t){$(".read_"+o).html(t)})}function doRemove(o,t){$.post("ajax_bookmark_topic.php",{book_id:o,book_type:t},function(t){$(".remove_"+o).html(t)})}`;
    page.prepend(newScript);

    var newp = document.createElement('p');
    newp.innerHTML = `<input type="number" placeholder="Số lượt bú" name="quantity" min="1" max="200" style="width: 7em"> <input class="bb" type="submit" value="Bú bẩn" style="text-align: center; width: 5em"> <input class="rm" type="submit" value="Xoá" style="text-align: center; width: 3em" onclick="doRemove('${id}','remove');" href="javascript:;">`;
    page.appendChild(newp);

    // var newa = document.createElement('p');
    // newa.innerHTML = `<input class="rm" type="submit" value="Xoá" style="text-align: center" onclick="doRemove('${id}','remove');" href="javascript:;">`;
    // page.appendChild(newa);

    $(document).delegate( '.bb', "click", function(){
        //đoạn này để check truyện của phải của sp không, ai xoá làm chó kkk
        const sp = page.textContent;
        if(sp.includes('Sexual Paradise')){
            return alert("Có cặc tao búp cho sp!");
        };
        try{
            var n = document.querySelector("input[type='number']").value;
            buff(n);
            //alert("Xong!");
            if(confirm("Xong! Bạn có muốn xoá truyện này khỏi danh sách theo dõi ngay không?")){
                doRemove(id,'remove');
                alert("Đã xoá!");
            };
        }
        catch(e){
            console.log(e);
        }
    });
});
