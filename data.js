
let dispDetails = [];
const dataJson = [	
{	
"Name" : "Node JS",
"DownloadLink" : "",
"Description": "This software is a JavaScript runtime built on Chrome's V8 JavaScript engine. Helps to use the Javascript on local machine cool right!",
"Guidance": "Click on the LTS and the website automatically decides your OS.",
"Size of file": "~19MB",
"Category": "Coding",
"AnyOSrestrictions": "Nope free to use in all",
"License" : "They dont charge, no penny required. Happy Coding!"
},
{	
"Name" : "Eclipse for JAVA",
"DownloadLink" : "https://www.eclipse.org/downloads/",
"Description": "Developed using Java, the Eclipse platform can be used to develop rich client applications, integrated development environments and other tools. Eclipse can be used as an IDE for any programming language for which a plug-in is available.",
"Guidance": "Choose the eclipse technology that is right for you",
"Size of file": "~182MB",
"Category": "Coding",
"AnyOSrestrictions": "Nope free to use in all",
"License" : "They dont charge, no penny required. Happy Coding!"
},
{
  "Name" : "VISUAL Studio 2019",
  "DownloadLink" : "https://visualstudio.microsoft.com/downloads/",
"Description": "Microsoft Visual Studio is an integrated development environment from Microsoft. It is used to develop computer programs, as well as websites, web apps, web services and mobile apps.",
"Guidance": "Choose the version out of Community, Professional or Enterprise whatever is suitable for you",
"Size of file": "~2.3GB",
"Category": "Coding",
"AnyOSrestrictions": "Nope free to use in all",
"License" : "Its Microsoft dude, its chargeable based on the version"
}
];

function onLoad(){
  dataJson.forEach(element => {
    dispDetails.push(element.Name);
  });

}
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (let i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  autocomplete(document.getElementById("txtsearchSoftware"), dispDetails);

const txtSearchbox = document.getElementById('txtsearchSoftware').value;

function searchfn(){
    txtSearchbox;
}
